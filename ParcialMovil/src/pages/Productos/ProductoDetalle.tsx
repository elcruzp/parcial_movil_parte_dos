import React, { useEffect, useState } from "react";
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
  IonIcon,
  IonAlert,
} from "@ionic/react";
import { cubeOutline, createOutline, trashOutline } from "ionicons/icons";
import BottomTabs from "../../components/BottomTabs";
import { useParams, useHistory } from "react-router-dom";
import { getById, deleteItem } from "../../services/storageService";
import "./ProductoDetalle.css";

const ProductoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<any>(null);
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const data = getById("productos", Number(id));
    setProducto(data);
  }, [id]);

  const handleDelete = () => {
    deleteItem("productos", Number(id));
    setShowAlert(false);
    history.push("/productos");
  };

  if (!producto) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="light">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/productos" />
            </IonButtons>
            <IonTitle>Producto no encontrado</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>No se encontró información para este producto.</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/productos" />
          </IonButtons>
          <IonTitle>Detalle del Producto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding producto-detalle-content">
        <IonCard className="producto-card">
          {/* Ícono grande arriba */}
          <div className="producto-icon-container">
            <IonIcon icon={cubeOutline} className="producto-icon" />
          </div>

          <IonCardHeader>
            <IonCardTitle>{producto.nombre}</IonCardTitle>
            <IonCardSubtitle>{producto.categoria}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p><strong>Descripción:</strong> {producto.descripcion || "Sin descripción"}</p>
            <p><strong>Precio:</strong> ${producto.precio?.toLocaleString()}</p>
            <p><strong>Stock:</strong> {producto.stock} unidades</p>
          </IonCardContent>
        </IonCard>

        {/* 🔘 Botones lado a lado */}
        <div className="botones-container">
          <IonButton
            color="success"
            onClick={() => history.push(`/productos/form/${id}`)}
          >
            <IonIcon slot="start" icon={createOutline} />
            Editar
          </IonButton>

          <IonButton
            color="danger"
            onClick={() => setShowAlert(true)}
          >
            <IonIcon slot="start" icon={trashOutline} />
            Eliminar
          </IonButton>
        </div>

        {/* Confirmación de eliminación */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Eliminar producto"
          message="¿Estás seguro de que deseas eliminar este producto?"
          buttons={[
            { text: "Cancelar", role: "cancel" },
            { text: "Eliminar", handler: handleDelete },
          ]}
        />
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default ProductoDetalle;
