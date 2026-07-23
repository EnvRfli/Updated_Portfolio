import { create } from 'zustand';

interface AdminState {
  isAdmin: boolean;
  showAdminLogin: boolean;
  setAdminStatus: (status: boolean) => void;
  setShowAdminLogin: (show: boolean) => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: false,
  showAdminLogin: false,
  setAdminStatus: (status) => set({ isAdmin: status }),
  setShowAdminLogin: (show) => set({ showAdminLogin: show }),
}));
