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
  IonAlert,
  IonButtons,
  IonMenuButton,
  IonSearchbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import BottomTabs from "../../components/BottomTabs";
import ListBase from "../../components/ListBase";
import { getAll, deleteItem } from "../../services/storageService";
import { useHistory } from "react-router-dom";

const UsuariosList: React.FC = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const history = useHistory();

  const loadUsuarios = () => {
    const data = getAll("usuarios");
    setUsuarios(data);
  };

  useEffect(() => {
    loadUsuarios();
  }, []);

  const handleDelete = () => {
    if (selectedId) {
      deleteItem("usuarios", selectedId);
      loadUsuarios();
      setSelectedId(null);
    }
  };

  // 🔍 Filtrado dinámico
  const filteredUsuarios = usuarios.filter(
    (u) =>
      u.nombre?.toLowerCase().includes(searchText.toLowerCase()) ||
      u.correo?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Usuarios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* 🔍 Barra de búsqueda */}
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
          placeholder="Buscar usuario..."
          debounce={100}
        ></IonSearchbar>

        {/* 🧑‍🦱 Lista de usuarios */}
        <ListBase
          items={filteredUsuarios.map((u) => ({
            id: u.id,
            title: u.nombre,
            subtitle: u.correo,
            content: u.rol,
            status: u.estado,
          }))}
          onItemClick={(id) => history.push(`/usuarios/detalle/${id}`)}
          onItemDelete={(id) => {
            setSelectedId(id);
            setShowAlert(true);
          }}
        />

        {/* ⚠️ Alerta de eliminación */}
        <IonAlert
          isOpen={showAlert}
          header="Eliminar usuario"
          message="¿Deseas eliminar este usuario?"
          buttons={[
            { text: "Cancelar", role: "cancel" },
            { text: "Eliminar", handler: handleDelete },
          ]}
          onDidDismiss={() => setShowAlert(false)}
        />

        {/* ➕ Botón flotante para crear usuario */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/usuarios/form">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default UsuariosList;
