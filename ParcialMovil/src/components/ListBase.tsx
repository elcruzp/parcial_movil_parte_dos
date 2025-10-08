import React from "react";
import {
  IonCard,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import "./ListBase.css";

interface Item {
  id: number | string;
  title: string;
  subtitle?: string;
  content?: string;
  status?: "Activo" | "Inactivo";
}

interface Props {
  items: Item[];
  onItemClick?: (id: number) => void;
  onItemDelete?: (id: number) => void;
  icon?: string;
  isGrid?: boolean; // 👈 NUEVO prop opcional
}

const ListBase: React.FC<Props> = ({
  items,
  onItemClick,
  icon,
  isGrid = false, // 👈 por defecto no cambia nada
}) => (
  <>
    {items.map((item) => (
      <IonCard
        key={item.id}
        button
        onClick={() => onItemClick?.(Number(item.id))}
        className={`user-card ${isGrid ? "grid-card" : ""}`} // 👈 clase condicional
      >
        {isGrid ? (
          <div className="grid-card-content">
            <IonAvatar className="grid-avatar">
              <IonIcon icon={icon || personCircleOutline} className="grid-icon" />
            </IonAvatar>
            <IonLabel className="grid-text">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
              <p className="price-text">{item.content}</p>
            </IonLabel>
          </div>
        ) : (
          <IonItem lines="none">
            <IonAvatar slot="start" className="user-avatar">
              <IonIcon icon={icon || personCircleOutline} className="user-icon" />
            </IonAvatar>

            <IonLabel>
              <h2 className="user-name">{item.title}</h2>
              <p className="user-email">{item.subtitle}</p>
              <p className="user-role">{item.content}</p>
            </IonLabel>

            {item.status && (
              <IonBadge
                color={item.status === "Activo" ? "success" : "medium"}
                slot="end"
              >
                {item.status}
              </IonBadge>
            )}
          </IonItem>
        )}
      </IonCard>
    ))}
  </>
);

export default ListBase;
