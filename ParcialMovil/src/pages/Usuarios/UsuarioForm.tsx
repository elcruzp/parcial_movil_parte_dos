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
import { personCircleOutline } from "ionicons/icons";
import { useParams, useHistory } from "react-router-dom";
import FormBase, { Field } from "../../components/FormBase";
import BottomTabs from "../../components/BottomTabs";
import { saveItem, updateItem, getById } from "../../services/storageService";
import "./UsuarioForm.css"; // 👈 Importa el CSS

const UsuarioForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id?: string }>();

  const [initialData, setInitialData] = useState<Record<string, any>>({});

  const fields: Field[] = [
    { name: "nombre", label: "Nombre Completo", type: "text" },
    { name: "correo", label: "Correo Electrónico", type: "email" },
    { name: "telefono", label: "Teléfono", type: "number" },
    {
      name: "rol",
      label: "Rol",
      type: "select",
      options: ["Administrador", "Veterinario", "Asistente"],
    },
    {
      name: "estado",
      label: "Estado",
      type: "segment",
      options: ["Activo", "Inactivo"],
    },
  ];

  useEffect(() => {
    if (id) {
      const usuario = getById("usuarios", Number(id));
      if (usuario) setInitialData(usuario);
    }
  }, [id]);

  const handleSubmit = (data: Record<string, any>) => {
    if (id) {
      updateItem("usuarios", Number(id), data);
    } else {
      saveItem("usuarios", data);
    }
    history.push("/usuarios");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/usuarios" />
          </IonButtons>
          <IonTitle>{id ? "Editar Usuario" : "Nuevo Usuario"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding form-content">
        {/* 👇 Logo o ícono principal */}
        <div className="form-header">
          <IonAvatar className="form-avatar">
            <IonIcon icon={personCircleOutline} className="form-icon" />
          </IonAvatar>
        </div>

        {/* 👇 Contenedor visual del formulario */}
        <div className="form-wrapper">
          <FormBase
            fields={fields}
            onSubmit={handleSubmit}
            initialData={initialData}
          />
        </div>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default UsuarioForm;
