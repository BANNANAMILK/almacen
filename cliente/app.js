var lista = new Vue({
    el: '#lista',
    data: {
        items: []
    },
    methods: {
        capitalize: function (input) {
            if (!input) return;
            return input[0].toUpperCase() + input.substr(1, input.length - 1);
        },
        sumar: function (i) {
            servicio.suma(this.items[i]._id);
            this.items[i].cantidad++;
        },
        restar: function (i) {
            servicio.resta(this.items[i]._id);
            this.items[i].cantidad--;
        },
        borrar: function (i) {
            servicio.deleteItem(this.items[i]._id);
            this.items.splice(i, 1);
        },
        editar: function (index) {
            agregar.showModal = true;
            agregar.$refs["modal1"].setProduct(index);
        }
    },
    beforeCreate: function () {
        servicio.getItems().then(function (response) {
            lista.items = response;
        });
    }
})


Vue.component('modal', {
    data: function () {
        return {
            nombre: "",
            cantidad: "",
            categoria: "",
            editar: false,
            index: 0
        }
    },
    computed: {
        disabled: function () {
            return !this.nombre || !this.cantidad || !this.categoria || !/^\d+$/.test(this.cantidad);
        }
    },
    template: '#modal-template',
    methods: {
        add: function () {
            if (this.editar) {

                var item = {
                    _id: lista.items[this.index]._id,
                    nombre: this.nombre,
                    cantidad: this.cantidad,
                    categoria: this.categoria
                }
                servicio.editItem(item);
                var current = lista.items[this.index];
                current.nombre = this.nombre;
                current.cantidad = this.cantidad;
                current.categoria = this.categoria;
                agregar.showModal = false;
            } else {
                var item = {
                    nombre: this.nombre,
                    cantidad: this.cantidad,
                    categoria: this.categoria
                }
                servicio.postItem(item)
                lista.items.push(item);
                this.reset();
            }


        },
        setProduct: function (index) {
            var current = lista.items[index];
            this.nombre = current.nombre;
            this.cantidad = current.cantidad;
            this.categoria = current.categoria;
            this.editar = true;
            this.index = index;
        },
        reset: function () {
            this.nombre = "";
            this.cantidad = "";
            this.categoria = "";
            this.editar = false;
        }
    }
})

// start app
var agregar = new Vue({
    el: '#agregar',
    data: {
        showModal: false
    },
    watch: {
        showModal: function (newValue) {
            if (newValue) return;
            var modal = this.$refs["modal1"];
            modal.reset();
        }
    }
})