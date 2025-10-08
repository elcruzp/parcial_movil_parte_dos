import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import FormBase, { Field } from "../../components/FormBase";
import BottomTabs from "../../components/BottomTabs";

const CategoriaForm: React.FC = () => {
  const fields: Field[] = [
    { name: "nombre", label: "Nombre de la Categoría", type: "text" },
    { name: "descripcion", label: "Descripción", type: "text" },
    { name: "icono", label: "URL de Imagen o Ícono", type: "text" },
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Categoría guardada:", data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Nueva Categoría</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <FormBase fields={fields} onSubmit={handleSubmit} />
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default CategoriaForm;
