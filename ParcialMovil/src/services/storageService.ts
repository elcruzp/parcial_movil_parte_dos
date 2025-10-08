
/**
 * Servicio genérico para manejar datos en localStorage
 * por "colección" (usuarios, mascotas, productos, etc.)
 */

export interface BaseEntity {
  id: number;
  [key: string]: any;
}

/** Obtiene todos los elementos de una colección */
export const getAll = <T = any>(key: string): T[] => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
};

/** Guarda un nuevo elemento (autoasigna ID incremental) */
export const saveItem = <T extends BaseEntity>(key: string, item: Omit<T, "id">): T => {
  const items = getAll<T>(key);
  const newItem: T = { ...item, id: Date.now() } as T;
  items.push(newItem);
  localStorage.setItem(key, JSON.stringify(items));
  return newItem;
};

/** Actualiza un elemento existente */
export const updateItem = <T extends BaseEntity>(key: string, id: number, updatedData: Partial<T>): T | null => {
  const items = getAll<T>(key);
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) return null;

  items[index] = { ...items[index], ...updatedData };
  localStorage.setItem(key, JSON.stringify(items));
  return items[index];
};

/** Elimina un elemento por ID */
export const deleteItem = (key: string, id: number): boolean => {
  const items = getAll(key);
  const newItems = items.filter((i: BaseEntity) => i.id !== id);
  localStorage.setItem(key, JSON.stringify(newItems));
  return true;
};

/** Obtiene un solo elemento por ID */
export const getById = <T = any>(key: string, id: number): T | null => {
  const items = getAll<T>(key);
  return items.find((i: any) => i.id === id) || null;
};
