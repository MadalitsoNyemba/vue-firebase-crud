<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="key">Key</label>
        <input
          type="text"
          class="form-control"
          id="key"
          required
          v-model="service.key"
          name="key"
        />
      </div>

      <div class="form-group">
        <label for="label">label</label>
        <input
          class="form-control"
          id="label"
          required
          v-model="service.label"
          name="label"
        />
      </div>


      <div class="form-group">
        <label for="label">Search Key</label>
        <input
          class="form-control"
          id="search"
          required
          v-model="service.search"
          name="search"
        />
      </div>

      <button @click="saveService" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newService">Add</button>
    </div>
  </div>
</template>

<script>
import ServiceDataService from "../services/ServiceDataService";

export default {
  name: "add-service",
  data() {
    return {
      service: {
        key: "",
        label: "",
        search: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveService() {
      var data = {
        key: this.service.key,
        label: this.service.label,
        searchKey: this.service.search,
        published: false
      };

      ServiceDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newService() {
      this.submitted = false;
      this.service = {
        key: "",
        label: "",
        search: "",
        published: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
