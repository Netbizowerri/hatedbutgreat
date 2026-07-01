import { createContext, useContext, useState, type ReactNode } from 'react';
import { Profile } from '@/types';
import { ProfileModal } from '@/components/ui/ProfileModal';

interface ProfileContextType {
  selectedProfile: Profile | null;
  setSelectedProfile: (profile: Profile | null) => void;
}

const ProfileContext = createContext<ProfileContextType>({
  selectedProfile: null,
  setSelectedProfile: () => {},
});

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  return (
    <ProfileContext.Provider value={{ selectedProfile, setSelectedProfile }}>
      {children}
      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
