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
import { pawOutline } from "ionicons/icons";
import { useParams, useHistory } from "react-router-dom";
import FormBase, { Field } from "../../components/FormBase";
import BottomTabs from "../../components/BottomTabs";
import { saveItem, updateItem, getById } from "../../services/storageService";
import "./MascotaForm.css";

const MascotaForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id?: string }>();
  const [initialData, setInitialData] = useState<Record<string, any>>({});

  // Campos del formulario 🐶
  const fields: Field[] = [
    { name: "nombre", label: "Nombre", type: "text" },
    {
      name: "especie",
      label: "Especie",
      type: "select",
      options: ["Perro", "Gato", "Ave", "Reptil", "Otro"],
    },
    { name: "raza", label: "Raza", type: "text" },
    { name: "edad", label: "Edad", type: "number" },
    { name: "sexo", label: "Sexo", type: "select", options: ["Macho", "Hembra"] },
    { name: "propietario", label: "Propietario", type: "text" },
    { name: "estadoSalud", label: "Estado de Salud", type: "text" },
    { name: "fechaRegistro", label: "Fecha de Registro", type: "text" },
  ];

  // Si estamos en modo edición, precargamos datos 🪄
  useEffect(() => {
    if (id) {
      const mascota = getById("mascotas", Number(id));
      if (mascota) setInitialData(mascota);
    }
  }, [id]);

  // Guardar o actualizar 🧠
  const handleSubmit = (data: Record<string, any>) => {
    if (id) {
      updateItem("mascotas", Number(id), data);
    } else {
      saveItem("mascotas", data);
    }
    history.push("/mascotas");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/mascotas" />
          </IonButtons>
          <IonTitle>{id ? "Editar Mascota" : "Nueva Mascota"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding mascota-form-content">
        {/* 🐾 Ícono principal */}
        <div className="mascota-form-header">
          <IonAvatar className="mascota-form-avatar">
            <IonIcon icon={pawOutline} className="mascota-form-icon" />
          </IonAvatar>
        </div>

        {/* Formulario reutilizable */}
        <div className="form-wrapper">
          <FormBase fields={fields} onSubmit={handleSubmit} initialData={initialData} />
        </div>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default MascotaForm;
