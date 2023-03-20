import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import Select from "react-select";

const modalContainer = document.querySelector("#modal");

const FormProduct = ({
  onClose,
  createProduct,
  selectedProduct,
  updateProduct,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  useEffect(() => {
    if (selectedProduct) {
      reset(selectedProduct);
    } else {
      emptyForm();
    }
  }, [selectedProduct]);

  const submit = (data) => {
    if (selectedProduct) {
      updateProduct(data);
    } else {
      createProduct(data);

      emptyForm();
    }
  };

  const emptyForm = () => {
    reset({
      name: "",
      category: "",
      price: "",
      isAvailable: false,
    });
  };

  //valores de select
  const options = [
    { value: true, label: "Disponible" },
    { value: false, label: "No Disponible" },
  ];

  return ReactDOM.createPortal(
    <div className="container-form">
      <form onSubmit={handleSubmit(submit)} className="form">
        <div className="formTitle">
          <h3>Productos</h3>
          <button className="btnCloseForm" onClick={onClose}>
            <i className="bx bxs-x-circle"></i>
          </button>
        </div>

        <div className="input">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            className="inputText"
            placeholder="escriba el nombre del producto"
            {...register("name", { required: true })}
          />
        </div>
        <div className="input">
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            id="category"
            className="inputText"
            placeholder="escriba el nombre de la categoria"
            {...register("category", { required: true })}
          />
        </div>
        <div className="input">
          <label htmlFor="price">Precio</label>
          <input
            type="text"
            id="price"
            className="inputText"
            placeholder="escriba el precio del producto"
            {...register("price", { required: true })}
          />
        </div>
        <div className="input">
          <label htmlFor="isAvailable">Disponibilidad</label>
          <select {...register("isAvailable")}>
            <option value={true}>Disponible</option>
            <option value={false}>No Disponible</option>
          </select>
        </div>
        <button className="btnSubmit" type="submit">
          {selectedProduct? 'Editar producto': 'agregar producto'}
        </button>
      </form>
    </div>,
    modalContainer
  );
};

export default FormProduct;
