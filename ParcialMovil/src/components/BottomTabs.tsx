import React from 'react';
import { IonFooter, IonToolbar, IonButtons, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { peopleCircle, paw, cube } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const BottomTabs: React.FC = () => {
  const history = useHistory();

  return (
    <IonFooter>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={() => history.push('/usuarios')}>
            <IonIcon icon={peopleCircle} />
            <IonLabel>Usuarios</IonLabel>
          </IonButton>
          <IonButton onClick={() => history.push('/productos')}>
            <IonIcon icon={cube} />
            <IonLabel>Productos</IonLabel>
          </IonButton>
          <IonButton onClick={() => history.push('/mascotas')}>
            <IonIcon icon={paw} />
            <IonLabel>Mascotas</IonLabel>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  );
};

export default BottomTabs;
