<template>
  <div class="text-start">
    <div class="card">
      <div class="card-header pb-0">
        <h3>Add New Employee</h3>
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
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">First Name</label>
                  <div class="input-group">
                    <input v-model="employee.firstName" class="form-control" type="text" placeholder="First Name">
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Last Name</label>
                  <div class="input-group">
                    <input v-model="employee.lastName" class="form-control" type="text" placeholder="Last Name">
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <div class="input-group">
                  <span class="input-group-text">@</span>
                  <input v-model="employee.email" class="form-control" type="email" placeholder="Email Address">
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Date of Birth</label>
                <div class="input-group">
                  <input v-model="employee.dob" class="form-control" type="date">
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Address</label>
                <div class="input-group">
                  <input v-model="employee.address" class="form-control" type="text" placeholder="Full Address">
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Gender</label>
                  <div class="input-group">
                    <select v-model="employee.gender" class="form-select">
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label">Status</label>
                  <div class="input-group">
                    <select v-model="employee.status" class="form-select">
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                      <option value="PENDING">Pending</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary m-r-15" type="submit" @click.prevent="submitForm" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm mr-2"></span>
          {{ loading ? 'Saving...' : 'Submit' }}
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
      employee: {
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        address: "",
        status: "ACTIVE",
        gender: "MALE"
      },
      loading: false,
      errorMessage: "",
      successMessage: ""
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.errorMessage = "";
      this.successMessage = "";

      try {
        const response = await apiService.createEmployee(this.employee);
        console.log('Employee created:', response.data);
        this.successMessage = "Employee created successfully!";
        this.resetForm();
      } catch (error) {
        console.error('Error creating employee:', error);
        this.errorMessage = error.message || "Failed to create employee";
      } finally {
        this.loading = false;
      }
    },

    resetForm() {
      this.employee = {
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        address: "",
        status: "ACTIVE",
        gender: "MALE"
      };
    }
  }
};
</script>