<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Services List</h4>
      <!-- <input type="text" class="form-control" placeholder="Search..."> -->
      <br>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(service, index) in services"
          :key="index"
          @click="setActiveService(service, index)"
        >
          {{ service.label }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllServices">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentService">
        <service-details
          :service="currentService"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Service...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceDataService from "../services/ServiceDataService";
import ServiceDetails from "./Service";

export default {
  name: "services-list",
  components: { ServiceDetails },
  data() {
    return {
      services: [],
      currentService: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _services = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _services.push({
          key: key,
          label: data.label,
          search: data.searchKey,
          published: data.published,
        });
      });


 this.services = Object.values(_services);
        this.services.sort(function(a,b){
          return a.label.localeCompare(b.label);
      })
    },

    refreshList() {
      this.currentService = null;
      this.currentIndex = -1;
    },

    setActiveService(service, index) {
      this.currentService = service;
      this.currentIndex = index;
    },

    removeAllServices() {
      ServiceDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    ServiceDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    ServiceDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
