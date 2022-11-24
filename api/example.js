export default ($axios) => ({
  index() {
    const res = $axios.$get("/example").catch((e) => {
      console.log(e);
    });
    return res;
  },

  create(payload) {
    return $axios.$post(`/example`, payload);
  },

  show(id) {
    return $axios.$get(`/example/${id}`);
  },

  update(payload, id) {
    return $axios.$put(`/example/${id}`, payload);
  },

  delete(id) {
    return $axios.$delete(`/example/${id}`);
  },
});
