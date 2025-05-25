<template>
  <div class="text-start">
    <div class="card">
      <div class="card-header pb-0">
        <h3>Today's Employee Attendance</h3>
        <button class="btn btn-primary btn-sm float-end" @click="fetchTodayAttendance">
          <i class="fa fa-refresh"></i> Refresh
        </button>
      </div>
      <div class="card-body">
        <div v-if="loading" class="text-center p-3">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
        <div v-else class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Status</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in todayAttendance" :key="employee.id">
                <td>{{ employee.name }}</td>
                <td>{{ employee.employeeId }}</td>
                <td>
                  <span :class="getStatusClass(employee.status)">{{ employee.status }}</span>
                </td>
                <td>
                  <span :class="getAttendanceClass(employee.markedAttendance)">
                    {{ employee.markedAttendance ? 'Present' : 'Absent' }}
                  </span>
                </td>
              </tr>
              <tr v-if="todayAttendance.length === 0">
                <td colspan="4" class="text-center">No attendance records found for today</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '../../../services/apiService';

export default {
  data() {
    return {
      todayAttendance: [],
      loading: false,
      errorMessage: ""
    };
  },
  mounted() {
    this.fetchTodayAttendance();
  },
  methods: {
    async fetchTodayAttendance() {
      try {
        this.loading = true;
        this.errorMessage = "";
        const response = await apiService.getTodayAttendance();
        this.todayAttendance = response.data || [];
      } catch (error) {
        console.error('Error fetching today\'s attendance:', error);
        this.errorMessage = error.message || "Failed to load today's attendance";
      } finally {
        this.loading = false;
      }
    },

    getStatusClass(status) {
      switch (status) {
        case 'PRESENT':
          return 'badge badge-success';
        case 'LATE':
          return 'badge badge-warning';
        case 'ABSENT':
          return 'badge badge-danger';
        default:
          return 'badge badge-secondary';
      }
    },

    getAttendanceClass(markedAttendance) {
      return markedAttendance ? 'badge badge-success' : 'badge badge-danger';
    }
  }
};
</script>