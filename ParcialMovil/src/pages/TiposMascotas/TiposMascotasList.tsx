import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";
import BottomTabs from "../../components/BottomTabs";
import ListBase from "../../components/ListBase";

const TiposMascotasList: React.FC = () => {
  const tiposMascotas = [
    {
      id: 1,
      title: "Perro",
      subtitle: "Mascota doméstica común",
      content: "Ideal para compañía, seguridad y asistencia",
    },
    {
      id: 2,
      title: "Gato",
      subtitle: "Mascota independiente y limpia",
      content: "Excelente compañía en espacios pequeños",
    },
    {
      id: 3,
      title: "Ave",
      subtitle: "Mascota de tipo exótica o doméstica",
      content: "Requiere cuidados de jaula y alimentación especial",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tipos de Mascotas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <ListBase
          items={tiposMascotas}
          onItemClick={(id) => (window.location.href = `/tiposmascotas/detalle/${id}`)}
        />

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/tiposmascotas/nuevo">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default TiposMascotasList;
