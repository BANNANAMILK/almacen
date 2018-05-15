var servicio = {
    baseUrl: "http://localhost:3000",
    getItems: function () {
        return Vue.http.get(this.baseUrl + '/api/item')
            .then(function (response) {
                console.log(response.body);
                return response.body;
            })
            .catch(function (error) {
                console.error(error)
            })
    },
    editItem: function (item) {
        return Vue.http.put(this.baseUrl + '/api/item', { item: item })
            .catch(function (error) {
                console.error(error)
            })
    },
    postItem: function (item) {
        return Vue.http.post(this.baseUrl + '/api/item', { item: item })
            .catch(function (error) {
                console.error(error)
            })
    },
    deleteItem: function (id) {
        return Vue.http.delete(this.baseUrl + '/api/item/' + id)
            .catch(function (error) {
                console.error(error)
            })

    },
    suma: function (id) {
        return Vue.http.put(this.baseUrl + '/api/item/' + id + '/suma')
            .catch(function (error) {
                console.error(error)
            })
    },
    resta: function (id) {
        return Vue.http.put(this.baseUrl + '/api/item/' + id + '/resta')
            .catch(function (error) {
                console.error(error)
            })
    }
}
