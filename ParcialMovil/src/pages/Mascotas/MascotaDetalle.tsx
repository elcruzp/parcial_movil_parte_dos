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
import { pawOutline } from "ionicons/icons";
import BottomTabs from "../../components/BottomTabs";
import { useParams, useHistory } from "react-router-dom";
import { getById } from "../../services/storageService";
import "./MascotaDetalle.css";

const MascotaDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mascota, setMascota] = useState<any>(null);
  const history = useHistory();

  // 🔁 Cargar datos desde el almacenamiento
  useEffect(() => {
    const data = getById("mascotas", Number(id));
    setMascota(data);
  }, [id]);

  if (!mascota) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="light">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/mascotas" />
            </IonButtons>
            <IonTitle>Mascota no encontrada</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>No se encontró información para esta mascota.</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/mascotas" />
          </IonButtons>
          <IonTitle>Detalle de Mascota</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding mascota-content">
        {/* 🐾 Ícono superior */}
        <div className="mascota-header">
          <IonAvatar className="mascota-avatar">
            <IonIcon icon={pawOutline} className="mascota-icon" />
          </IonAvatar>
        </div>

        {/* 💡 Card con detalles */}
        <IonCard className="mascota-card">
          <IonCardHeader>
            <IonCardTitle>{mascota.nombre}</IonCardTitle>
            <IonCardSubtitle>
              {mascota.especie} - {mascota.raza}
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p><strong>Edad:</strong> {mascota.edad} años</p>
            <p><strong>Sexo:</strong> {mascota.sexo}</p>
            <p><strong>Propietario:</strong> {mascota.propietario}</p>
            <p><strong>Estado de salud:</strong> {mascota.estadoSalud}</p>
            <p><strong>Fecha de registro:</strong> {mascota.fechaRegistro}</p>
          </IonCardContent>
        </IonCard>

        {/* ✏️ Botón de edición */}
        <IonButton
          expand="block"
          color="success"
          onClick={() => history.push(`/mascotas/form/${id}`)}
        >
          Editar Mascota
        </IonButton>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default MascotaDetalle;
