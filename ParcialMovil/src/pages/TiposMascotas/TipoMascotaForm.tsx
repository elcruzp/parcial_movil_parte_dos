import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import FormBase, { Field } from "../../components/FormBase";
import BottomTabs from "../../components/BottomTabs";

const TipoMascotaForm: React.FC = () => {
  const fields: Field[] = [
    { name: "nombre", label: "Nombre del Tipo", type: "text" },
    { name: "descripcion", label: "Descripción", type: "text" },
    { name: "icono", label: "URL del Ícono Representativo", type: "text" },
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Tipo de mascota guardado:", data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Nuevo Tipo de Mascota</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <FormBase fields={fields} onSubmit={handleSubmit} />
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default TipoMascotaForm;