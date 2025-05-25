<template>
  <div class="text-start">
    <div class="card">
      <div class="card-header pb-0">
        <h3>Employee Attendance</h3>
      </div>
      <div class="card-body">
        <div v-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>
        <div class="row">
          <div class="col">
            <form>
              <div class="mb-3">
                <label class="form-label">Select Employee</label>
                <div class="input-group">
                  <select v-model="selectedEmployeeId" class="form-select">
                    <option value="" disabled>-- Select Employee --</option>
                    <option v-for="employee in employees" :key="employee.id" :value="employee.id">
                      {{ employee.firstName }} {{ employee.lastName }}
                    </option>
                  </select>
                  <button class="btn btn-primary" type="button" @click="fetchEmployees">
                    <i class="fa fa-refresh"></i> Refresh
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-success m-r-15" type="submit" @click.prevent="markAttendance"
                :disabled="loading || !selectedEmployeeId">
          <span v-if="loading" class="spinner-border spinner-border-sm mr-2"></span>
          {{ loading ? 'Processing...' : 'Mark Attendance' }}
        </button>
        <button class="btn btn-light" type="button" :disabled="loading">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '../../../services/apiService';

export default {
  data() {
    return {
      employees: [],
      selectedEmployeeId: "",
      loading: false,
      errorMessage: "",
      successMessage: ""
    };
  },
  mounted() {
    this.fetchEmployees();
  },
  methods: {
    async fetchEmployees() {
      try {
        this.loading = true;
        this.errorMessage = "";
        const response = await apiService.getEmployees();

        // Debug logs to verify data structure
        console.log('API Response:', response);
        console.log('Response data structure:', response.data);

        // Extract employees from the content array
        this.employees = response.data?.content || [];
        console.log('Extracted employees:', this.employees);

        if (this.employees.length > 0) {
          console.log('Sample employee:', this.employees[0]);
          console.log('Employee name:', `${this.employees[0].firstName} ${this.employees[0].lastName}`);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
        this.errorMessage = error.message || "Failed to load employees list";
      } finally {
        this.loading = false;
      }
    },

    async markAttendance() {
      if (!this.selectedEmployeeId) {
        this.errorMessage = "Please select an employee";
        return;
      }

      this.loading = true;
      this.errorMessage = "";
      this.successMessage = "";

      try {
        const attendanceData = {
          markedAttendance: true,
          employeeId: this.selectedEmployeeId
        };

        const response = await apiService.markEmployeeAttendance(attendanceData);
        this.successMessage = "Attendance marked successfully!";
        this.selectedEmployeeId = "";
      } catch (error) {
        console.error('Error marking attendance:', error);
        this.errorMessage = error.message || "Failed to mark attendance";
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>