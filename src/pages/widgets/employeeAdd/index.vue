<template>
    <div>
        <Breadcrumbs main="Widgets" title="Employee Add" />

        <div class="container-fluid">
            <div class="row">
                <employeeForm/>
            </div>
        </div>
    </div>
</template>

<script>
import employeeForm from './employeeForm.vue'

export default {
    components: {
        employeeForm
    }
}
</script>