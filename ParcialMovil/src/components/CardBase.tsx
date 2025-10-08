import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";

interface Props {
  title: string;
  subtitle?: string;
  content?: string;
  footer?: string;
  onClick?: () => void;
}

const CardBase: React.FC<Props> = ({ title, subtitle, content, footer, onClick }) => (
  <IonCard button={!!onClick} onClick={onClick}>
    <IonCardHeader>
      <IonCardTitle>{title}</IonCardTitle>
      {subtitle && <IonCardSubtitle>{subtitle}</IonCardSubtitle>}
    </IonCardHeader>
    {content && <IonCardContent>{content}</IonCardContent>}
    {footer && <IonCardContent><small>{footer}</small></IonCardContent>}
  </IonCard>
);

export default CardBase;
