import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const MenuTem: React.FC = () => {
  const history = useHistory();

  const navigate = (path: string) => {
    history.push(path);
  };

  return (
    <IonMenu side="start" contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonItem button onClick={() => navigate("/home")}>
            <IonLabel>Inicio</IonLabel>
          </IonItem>

          <IonItem button onClick={() => navigate("/usuarios")}>
            <IonLabel>Usuarios</IonLabel>
          </IonItem>

          <IonItem button onClick={() => navigate("/mascotas")}>
            <IonLabel>Mascotas</IonLabel>
          </IonItem>

          <IonItem button onClick={() => navigate("/tiposmascotas")}>
            <IonLabel>Tipos de Mascotas</IonLabel>
          </IonItem>

          <IonItem button onClick={() => navigate("/productos")}>
            <IonLabel>Productos</IonLabel>
          </IonItem>

          <IonItem button onClick={() => navigate("/categorias")}>
            <IonLabel>Categorías de Productos</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuTem;
