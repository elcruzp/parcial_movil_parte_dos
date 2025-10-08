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

const CategoriasList: React.FC = () => {
  const categorias = [
    {
      id: 1,
      title: "Alimentos",
      subtitle: "Productos nutricionales para mascotas",
      content: "Ejemplo: Alimento Premium, Snacks, Vitaminas",
    },
    {
      id: 2,
      title: "Medicamentos",
      subtitle: "Tratamientos y productos veterinarios",
      content: "Ejemplo: Antipulgas, Desparasitantes",
    },
    {
      id: 3,
      title: "Accesorios",
      subtitle: "Productos complementarios",
      content: "Ejemplo: Collares, Juguetes, Ropa",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Categorías</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <ListBase
          items={categorias}
          onItemClick={(id) => (window.location.href = `/categorias/detalle/${id}`)}
        />

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/categorias/nueva">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default CategoriasList;
