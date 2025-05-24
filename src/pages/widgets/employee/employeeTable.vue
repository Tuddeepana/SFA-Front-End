<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>Employee List</h5>
      </div>

      <div v-if="loading" class="text-center p-5">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div v-else class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Status</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <th scope="row">{{ employee.id }}</th>
              <td>{{ employee.firstName }}</td>
              <td>{{ employee.lastName }}</td>
              <td>{{ employee.email }}</td>
              <td>{{ employee.dob }}</td>
              <td>
                <span :class="getStatusClass(employee.status)">{{ employee.status }}</span>
              </td>
              <td>{{ employee.gender }}</td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteEmployee(employee.id)" title="Delete">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr v-if="employees.length === 0">
              <td colspan="8" class="text-center">No employees found</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div>
          Showing page {{ currentPage + 1 }}
        </div>
        <div>
          <button
            class="btn btn-primary btn-sm me-2"
            :disabled="currentPage === 0"
            @click="fetchEmployees(currentPage - 1)">
            Previous
          </button>
          <button
            class="btn btn-primary btn-sm"
            :disabled="employees.length < pageSize"
            @click="fetchEmployees(currentPage + 1)">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "@/services/apiService";

export default {
  data() {
    return {
      employees: [],
      currentPage: 0,
      pageSize: 20,
      loading: false,
      authError: false
    };
  },

  mounted() {
    this.checkAuthAndFetchData();
  },

  methods: {
    checkAuthAndFetchData() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$toast.error("Please login to view employee data");
        this.authError = true;
        // Uncomment to redirect to login
        // this.$router.push('/login');
        return;
      }

      this.fetchEmployees();
    },

    async fetchEmployees(page = 0) {
      try {
        this.loading = true;
        this.currentPage = page;

        console.log(`Fetching employees for page ${page}`);
        const response = await apiService.getEmployees(page, this.pageSize);

        if (response.data && response.data.content) {
          this.employees = response.data.content;
          console.log(`Loaded ${this.employees.length} employees`);
        } else {
          console.warn('Unexpected response format:', response.data);
          this.employees = [];
        }
      } catch (error) {
        console.error('Error fetching employees:', error);

        if (error.response && error.response.status === 403) {
          this.$toast.error("You don't have permission to view employees");
          this.authError = true;
        } else {
          this.$toast.error("Failed to load employees");
        }
      } finally {
        this.loading = false;
      }
    },

    getStatusClass(status) {
      switch (status) {
        case 'ACTIVE':
          return 'badge badge-success';
        case 'INACTIVE':
          return 'badge badge-danger';
        default:
          return 'badge badge-secondary';
      }
    },

    async deleteEmployee(id) {
      if (confirm('Are you sure you want to delete this employee?')) {
        try {
          this.loading = true;
          await apiService.deleteEmployee(id);
          this.$toast.success("Employee deleted successfully");
          await this.fetchEmployees(this.currentPage); // Refresh the list
        } catch (error) {
          console.error('Error deleting employee:', error);
          this.$toast.error("Failed to delete employee");
        } finally {
          this.loading = false;
        }
      }
    }
  }
}
</script>