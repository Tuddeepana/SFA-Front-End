<template>
    <div>
        <Breadcrumbs main="Widgets" title="Employee Add" />

        <div class="container-fluid">
            <div class="row">
                <employeeAttendanceView/>
            </div>
        </div>
    </div>
</template>

<script>
import employeeAttendanceView from './employeeAttendanceForm.vue'

export default {
    components: {
        employeeAttendanceView
    }
}
</script>