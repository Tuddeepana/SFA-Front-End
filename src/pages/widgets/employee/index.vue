<template>
    <div>
        <Breadcrumbs main="Widgets" title="Employee" />

        <div class="container-fluid">
            <div class="row">
                <employeeListTable/>
            </div>
        </div>

    </div>
</template>

<script>
import employeeListTable from './employeeTable.vue'

export default {
    components: {
        employeeListTable

    }
}
</script>
