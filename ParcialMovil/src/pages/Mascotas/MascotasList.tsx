import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSearchbar,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { add, pawOutline } from "ionicons/icons";
import BottomTabs from "../../components/BottomTabs";
import ListBase from "../../components/ListBase";
import { getAll } from "../../services/storageService";
import { useHistory } from "react-router-dom";
import "./MascotasList.css";

const MascotasList: React.FC = () => {
  const history = useHistory();
  const [mascotas, setMascotas] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  // 🔁 Cargar mascotas desde localStorage
  const loadMascotas = () => {
    const data = getAll("mascotas") || [];
    setMascotas(data);
  };

  useEffect(() => {
    loadMascotas();
  }, []);

  // 🔍 Filtrar mascotas según el texto
  const filteredMascotas = mascotas.filter(
    (m) =>
      m.nombre?.toLowerCase().includes(searchText.toLowerCase()) ||
      m.propietario?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage id="main">
      {/* Header blanco, igual al mockup */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mascotas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding mascotas-content">
        {/* 🔍 Barra de búsqueda */}
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
          placeholder="Buscar mascota..."
          debounce={100}
        ></IonSearchbar>

        {/* 🐾 Lista de mascotas reutilizando ListBase */}
        <ListBase
          items={filteredMascotas.map((m) => ({
            id: m.id,
            title: m.nombre,
            subtitle: `${m.especie} - Propietario: ${m.propietario}`,
            content: `Estado de salud: ${m.estadoSalud}`,
          }))}
          onItemClick={(id) => history.push(`/mascotas/detalle/${id}`)}
          icon={pawOutline} // 👈 huellita
        />

        {/* ➕ Botón flotante verde */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="success" onClick={() => history.push("/mascotas/form")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default MascotasList;
