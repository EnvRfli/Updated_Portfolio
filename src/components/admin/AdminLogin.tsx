import React, { useState, useEffect } from 'react';
import { useAdminStore } from '../../store/useAdminStore';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import { supabase } from '../../lib/supabase';
import { BrutalButton } from '../ui/BrutalButton';

export const AdminLogin: React.FC = () => {
  const { showAdminLogin, setShowAdminLogin, isAdmin, setAdminStatus } = useAdminStore();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setAdminStatus(true);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAdminStatus(!!session);
    });

    return () => subscription.unsubscribe();
  }, [setAdminStatus]);

  if (!showAdminLogin) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Hardcoded email for simplified login experience
    const { error } = await supabase.auth.signInWithPassword({
      email: 'mrafliagusta@gmail.com',
      password,
    });

    if (error) {
      // Customize error message for wrong password to hide email existence
      if (error.message.includes('Invalid login credentials')) {
        setError('Kode rahasia salah.');
      } else {
        setError(error.message);
      }
    } else {
      setShowAdminLogin(false);
      setPassword('');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowAdminLogin(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="bg-neo-card text-neo-bg border-4 border-neo-border p-6 shadow-brutal-lg max-w-sm w-full relative">
        <button
          onClick={() => setShowAdminLogin(false)}
          className="absolute top-4 right-4 text-neo-border hover:text-neo-primary transition-colors"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-3xl font-heading font-black mb-6">
          {isAdmin ? 'Admin Dashboard' : 'Login Akses'}
        </h2>

        {isAdmin ? (
          <div className="space-y-6">
            <p className="font-body font-bold text-green-600 border-2 border-green-600 p-2 bg-green-50">
              Anda telah masuk sebagai Admin.
            </p>
            <BrutalButton onClick={handleLogout} className="w-full justify-center">
              Logout
            </BrutalButton>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-100 border-2 border-red-500 text-red-700 p-2 font-bold text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="block font-bold mb-1">Kode Rahasia</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Masukkan kode unik..."
                className="w-full border-4 border-neo-border p-2 focus:outline-none focus:ring-4 focus:ring-neo-primary/20 bg-white"
                required
              />
            </div>
            <BrutalButton type="submit" disabled={loading} className="w-full justify-center mt-4">
              {loading ? <FaSpinner className="animate-spin" /> : 'Masuk'}
            </BrutalButton>
          </form>
        )}
      </div>
    </div>
  );
};
