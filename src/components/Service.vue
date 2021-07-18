<template>
  <div v-if="currentService" class="edit-form">
    <h4>Service</h4>
    <form>
      <!-- <div class="form-group">
        <label for="key">Key</label>
        <input
          type="text"
          class="form-control"
          id="key"
          v-model="currentService.key"
        />
      </div> -->

      <div class="form-group">
        <label for="label">Label</label>
        <input
          type="text"
          class="form-control"
          id="label"
          v-model="currentService.label"
        />
      </div>

      <div class="form-group">
        <label for="search">Search</label>
        <input
          type="text"
          class="form-control"
          id="search"
          v-model="currentService.search"
        />
      </div>

      

     
    </form>

   
   <br>

    <button class="btn btn-danger mr-2" @click="deleteService">
      Delete
    </button>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;

    <button type="submit" class="btn btn-success" @click="updateService">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Service...</p>
  </div>
</template>

<script>
import ServiceDataService from "../services/ServiceDataService";

export default {
  name: "service",
  props: ["service"],
  data() {
    return {
      currentService: null,
      message: "",
    };
  },
  watch: {
    service: function(service) {
      this.currentService = { ...service };
      this.message = "";
    },
  },
  methods: {
  

    updateService() {
      const data = {
        label: this.currentService.label,
        searchKey: this.currentService.search,
      };

      ServiceDataService.update(this.currentService.key, data)
        .then(() => {
          this.message = "The service was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteService() {
      ServiceDataService.delete(this.currentService.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentService = { ...this.service }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
