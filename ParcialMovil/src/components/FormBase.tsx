import React, { useEffect, useState } from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonList,
  IonAlert,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import "./FormBase.css";

export interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "select" | "segment"; // 👈 se agrega segment
  options?: string[];
}

interface Props {
  fields: Field[];
  onSubmit: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

const FormBase: React.FC<Props> = ({ fields, onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState<Record<string, any>>(initialData);
  const [showAlert, setShowAlert] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (Object.keys(initialData).length > 0) {
      setFormData(initialData);
      setIsEditing(true);
    }
  }, [initialData]);

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!isEditing) {
      setShowAlert(true);
      setFormData({});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <IonList>
          {fields.map((f) => (
            <IonItem key={f.name}>
              <IonLabel position="floating">{f.label}</IonLabel>

              {/* 🔽 Select normal */}
              {f.type === "select" ? (
                <IonSelect
                  name={f.name}
                  value={formData[f.name] || ""}
                  onIonChange={(e) => handleChange(f.name, e.detail.value)}
                >
                  {f.options?.map((opt) => (
                    <IonSelectOption key={opt} value={opt}>
                      {opt}
                    </IonSelectOption>
                  ))}
                </IonSelect>

              ) : f.type === "segment" ? (
                /* 🔘 Segment para estado */
                <IonSegment
                  value={formData[f.name] || f.options?.[0]}
                  onIonChange={(e) => handleChange(f.name, e.detail.value)}
                >
                  {f.options?.map((opt) => (
                    <IonSegmentButton key={opt} value={opt}>
                      {opt}
                    </IonSegmentButton>
                  ))}
                </IonSegment>

              ) : (
                /* ✏️ Input normal */
                <IonInput
                  type={f.type}
                  name={f.name}
                  value={formData[f.name] || ""}
                  required
                  onIonChange={(e) => handleChange(f.name, e.detail.value!)}
                />
              )}
            </IonItem>
          ))}
        </IonList>

        <IonButton
          expand="block"
          type="submit"
          color="primary"
          className="ion-margin-top"
        >
          {isEditing ? "Actualizar" : "Guardar"}
        </IonButton>
      </form>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="✅ Éxito"
        message="Datos guardados correctamente."
        buttons={["OK"]}
      />
    </>
  );
};

export default FormBase;
