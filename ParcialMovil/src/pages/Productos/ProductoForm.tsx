import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonAvatar,
  IonIcon,
} from "@ionic/react";
import { cubeOutline } from "ionicons/icons";
import { useParams, useHistory } from "react-router-dom";
import FormBase, { Field } from "../../components/FormBase";
import BottomTabs from "../../components/BottomTabs";
import { saveItem, updateItem, getById } from "../../services/storageService";
import "./ProductoForm.css";

const ProductoForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id?: string }>();
  const [initialData, setInitialData] = useState<Record<string, any>>({});

  const fields: Field[] = [
    { name: "nombre", label: "Nombre del Producto", type: "text" },
    {
      name: "categoria",
      label: "Categoría",
      type: "select",
      options: ["Alimentos", "Medicamentos", "Accesorios", "Higiene"],
    },
    { name: "descripcion", label: "Descripción", type: "text" },
    { name: "precio", label: "Precio", type: "number" },
    { name: "stock", label: "Stock Disponible", type: "number" },
    { name: "imagen", label: "URL de Imagen", type: "text" },
  ];

  useEffect(() => {
    if (id) {
      const producto = getById("productos", Number(id));
      if (producto) setInitialData(producto);
    }
  }, [id]);

  const handleSubmit = (data: Record<string, any>) => {
    if (id) {
      updateItem("productos", Number(id), data);
    } else {
      saveItem("productos", data);
    }
    history.push("/productos");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/productos" />
          </IonButtons>
          <IonTitle>{id ? "Editar Producto" : "Nuevo Producto"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding producto-form-content">
        {/* 🧱 Ícono principal */}
        <div className="producto-form-header">
          <IonAvatar className="producto-form-avatar">
            <IonIcon icon={cubeOutline} className="producto-form-icon" />
          </IonAvatar>
        </div>

        <div className="form-wrapper">
          <FormBase fields={fields} onSubmit={handleSubmit} initialData={initialData} />
        </div>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default ProductoForm;
