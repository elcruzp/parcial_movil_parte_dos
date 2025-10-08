import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonImg,
} from "@ionic/react";
import BottomTabs from "../../components/BottomTabs";

const TipoMascotaDetalle: React.FC = () => {
  const tipoMascota = {
    id: 1,
    nombre: "Perro",
    descripcion: "Mascota leal, sociable y adaptable. Ideal para familias.",
    icono: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tiposmascotas" />
          </IonButtons>
          <IonTitle>Detalle Tipo de Mascota</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonImg src={tipoMascota.icono} alt={tipoMascota.nombre} />
          <IonCardHeader>
            <IonCardTitle>{tipoMascota.nombre}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Descripción:</strong> {tipoMascota.descripcion}</p>
          </IonCardContent>
        </IonCard>

        <IonButton expand="block" color="secondary" routerLink="/tiposmascotas/nuevo">
          Editar Tipo de Mascota
        </IonButton>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default TipoMascotaDetalle;
