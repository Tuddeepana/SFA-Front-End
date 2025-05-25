<template>
    <div>
        <Breadcrumbs main="Widgets" title="Employee Add" />

        <div class="container-fluid">
            <div class="row">
                <employeeMark/>
            </div>
        </div>
    </div>
</template>

<script>
import employeeMark from './employeeAttendanceForm.vue'

export default {
    components: {
        employeeMark
    }
}
</script>