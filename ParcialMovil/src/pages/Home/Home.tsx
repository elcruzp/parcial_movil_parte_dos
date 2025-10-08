import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
} from "@ionic/react";
import BottomTabs from "../../components/BottomTabs";

const Home: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Usuarios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Bienvenido al sistema</h2>
        <p>Usa el menú lateral o los botones inferiores para navegar.</p>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default Home;
