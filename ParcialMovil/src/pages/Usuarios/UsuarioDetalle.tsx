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
  IonAvatar,
  IonIcon,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons"; // 👈 mismo ícono del ListBase
import BottomTabs from "../../components/BottomTabs";
import { useParams, useHistory } from "react-router-dom";
import { getById } from "../../services/storageService";
import "./UsuarioDetalle.css"; // 👈 importar CSS nuevo

const UsuarioDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    const data = getById("usuarios", Number(id));
    setUsuario(data);
  }, [id]);

  if (!usuario) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/usuarios" />
            </IonButtons>
            <IonTitle>Usuario no encontrado</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>No se encontró información para este usuario.</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/usuarios" />
          </IonButtons>
          <IonTitle>Detalle del Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard className="user-detail-card">
          <IonCardHeader className="detail-header">
            <IonAvatar className="detail-avatar">
              <IonIcon icon={personCircleOutline} className="detail-icon" />
            </IonAvatar>
            <IonCardTitle className="detail-name">{usuario.nombre}</IonCardTitle>
            <IonCardSubtitle className="detail-role">{usuario.rol}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p><strong>Correo:</strong> {usuario.correo}</p>
            <p><strong>Teléfono:</strong> {usuario.telefono}</p>
            <p><strong>Estado:</strong> {usuario.estado}</p>
          </IonCardContent>
        </IonCard>

        <IonButton
          expand="block"
          color="secondary"
          onClick={() => history.push(`/usuarios/form/${id}`)}
        >
          Editar Usuario
        </IonButton>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default UsuarioDetalle;
