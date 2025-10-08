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
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonImg,
} from "@ionic/react";
import BottomTabs from "../../components/BottomTabs";

const CategoriaDetalle: React.FC = () => {
  const categoria = {
    id: 1,
    nombre: "Alimentos",
    descripcion: "Productos alimenticios balanceados y nutritivos para mascotas.",
    icono: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/categorias" />
          </IonButtons>
          <IonTitle>Detalle Categoría</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonImg src={categoria.icono} alt={categoria.nombre} />
          <IonCardHeader>
            <IonCardTitle>{categoria.nombre}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p><strong>Descripción:</strong> {categoria.descripcion}</p>
          </IonCardContent>
        </IonCard>

        <IonButton expand="block" color="secondary" routerLink="/categorias/nueva">
          Editar Categoría
        </IonButton>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default CategoriaDetalle;
