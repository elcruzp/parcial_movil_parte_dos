import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Páginas principales */
import Home from "./pages/Home/Home";

/* Módulo Usuarios */
import UsuariosList from "./pages/Usuarios/UsuariosList";
import UsuarioForm from "./pages/Usuarios/UsuarioForm";
import UsuarioDetalle from "./pages/Usuarios/UsuarioDetalle";

/* Módulo Mascotas */
import MascotasList from "./pages/Mascotas/MascotasList";
import MascotaForm from "./pages/Mascotas/MascotaForm";
import MascotaDetalle from "./pages/Mascotas/MascotaDetalle";

/* Módulo Productos */
import ProductosList from "./pages/Productos/ProductosList";
import ProductoForm from "./pages/Productos/ProductoForm";
import ProductoDetalle from "./pages/Productos/ProductoDetalle";

/* Módulo Categorías */
import CategoriasList from "./pages/Categorias/CategoriasList";
import CategoriaForm from "./pages/Categorias/CategoriaForm";
import CategoriaDetalle from "./pages/Categorias/CategoriaDetalle";

/* Módulo Tipos de Mascotas */
import TiposMascotasList from "./pages/TiposMascotas/TiposMascotasList";
import TipoMascotaForm from "./pages/TiposMascotas/TipoMascotaForm";
import TipoMascotaDetalle from "./pages/TiposMascotas/TipoMascotaDetalle";


/* Componentes */
import Menu from "./components/MenuTem";

/* Ionic CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Menú lateral */}
      <Menu />

      {/* Rutas principales */}
<IonRouterOutlet id="main">
  {/* Home */}
  <Route exact path="/home" component={Home} />

    {/* Usuarios */}
    <Route exact path="/usuarios" component={UsuariosList} />
    <Route exact path="/usuarios/form/:id?" component={UsuarioForm} />
    <Route exact path="/usuarios/detalle/:id" component={UsuarioDetalle} />

    {/* Mascotas */}
     <Route exact path="/mascotas" component={MascotasList} />
    <Route exact path="/mascotas/form/:id?" component={MascotaForm} />
    <Route exact path="/mascotas/detalle/:id" component={MascotaDetalle} />

     {/* Productos */}
    <Route exact path="/productos" component={ProductosList} />
    <Route exact path="/productos/form/:id?" component={ProductoForm} />
    <Route exact path="/productos/detalle/:id" component={ProductoDetalle} />

    {/* Categorías */}
    <Route exact path="/categorias" component={CategoriasList} />
    <Route exact path="/categorias/form/:id?" component={CategoriaForm} />
    <Route exact path="/categorias/detalle/:id" component={CategoriaDetalle} />

    {/* Tipos de Mascotas */}
    <Route exact path="/tiposmascotas" component={TiposMascotasList} />
    <Route exact path="/tiposmascotas/form/:id?" component={TipoMascotaForm} />
    <Route exact path="/tiposmascotas/detalle/:id" component={TipoMascotaDetalle} />

    {/* Redirección por defecto */}
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
