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
  IonMenuButton,
  IonButtons,
} from "@ionic/react";
import { add, cubeOutline } from "ionicons/icons";
import BottomTabs from "../../components/BottomTabs";
import ListBase from "../../components/ListBase";
import { getAll } from "../../services/storageService";
import { useHistory } from "react-router-dom";
import "./ProductosList.css";

const ProductosList: React.FC = () => {
  const history = useHistory();
  const [productos, setProductos] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  // 🧾 Cargar productos desde localStorage
  const loadProductos = () => {
    const data = getAll("productos") || [];
    setProductos(data);
  };

  useEffect(() => {
    loadProductos();
  }, []);

  // 🔍 Filtro de búsqueda
  const filteredProductos = productos.filter(
    (p) =>
      p.nombre?.toLowerCase().includes(searchText.toLowerCase()) ||
      p.categoria?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Productos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding productos-content productos-list">
        {/* 🔍 Barra de búsqueda */}
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
          placeholder="Buscar producto..."
          debounce={100}
        ></IonSearchbar>

        {/* 🧱 Grid de productos */}
        <ListBase
          items={filteredProductos.map((p) => ({
            id: p.id,
            title: p.nombre,
            subtitle: `Categoría: ${p.categoria}`,
            content: `Precio: $${p.precio?.toLocaleString()} | Stock: ${p.stock} unidades`,
          }))}
          onItemClick={(id) => history.push(`/productos/detalle/${id}`)}
          icon={cubeOutline}
          isGrid // 👈 activa el layout tipo grid (ícono arriba)
        />

        {/* ➕ Botón flotante */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            color="success"
            onClick={() => history.push("/productos/form")}
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>

      <BottomTabs />
    </IonPage>
  );
};

export default ProductosList;
