/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Compass, 
  Users, 
  PlusCircle, 
  Bell, 
  Search, 
  Plus, 
  Heart, 
  Share2, 
  Bookmark, 
  MoreHorizontal, 
  ArrowUpRight,
  X,
  Send,
  MapPin,
  Tag,
  Camera,
  Shirt,
  Utensils,
  Plane,
  User as UserIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Post, User, Comment } from './types';
import { MOCK_USER, MOCK_POSTS, MOCK_COMMENTS, CATEGORIES, FOLLOWERS } from './constants';

type View = 'home' | 'explore' | 'following' | 'profile' | 'create' | 'detail';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (view: View, post?: Post) => {
    if (post) setSelectedPost(post);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 glass-header border-b border-surface-container-high/10">
        <div className="max-w-[1920px] mx-auto h-20 px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span 
              className="text-2xl font-black text-primary italic font-headline tracking-tight cursor-pointer"
              onClick={() => navigateTo('home')}
            >
              The Curator
            </span>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => navigateTo('home')}
                className={`font-headline tracking-tight transition-colors duration-300 ${currentView === 'home' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('explore')}
                className={`font-headline tracking-tight transition-colors duration-300 ${currentView === 'explore' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Explore
              </button>
              <button 
                onClick={() => navigateTo('following')}
                className={`font-headline tracking-tight transition-colors duration-300 ${currentView === 'following' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Following
              </button>
            </nav>
          </div>

          <div className="flex-1 max-w-xl px-4 md:px-12">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                type="text"
                placeholder="Search curated trends..."
                className="w-full h-11 pl-12 pr-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <PlusCircle className="w-6 h-6" />
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button 
              onClick={() => navigateTo('create')}
              className="hidden md:block signature-gradient text-on-primary px-6 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-transform"
            >
              Upload
            </button>
            <div 
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-high cursor-pointer ml-2"
              onClick={() => navigateTo('profile')}
            >
              <img src={MOCK_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-20">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-20 h-[calc(100vh-80px)] p-6 space-y-8 border-r border-surface-container-high/10">
          <div className="space-y-4">
            <div className="px-2">
              <h2 className="text-lg font-bold font-headline">For You</h2>
              <p className="text-xs text-on-surface-variant">Curated Daily</p>
            </div>
            <nav className="space-y-1">
              <SidebarLink 
                icon={<Home className="w-5 h-5" />} 
                label="Home" 
                active={currentView === 'home'} 
                onClick={() => navigateTo('home')} 
              />
              <SidebarLink 
                icon={<Compass className="w-5 h-5" />} 
                label="Explore" 
                active={currentView === 'explore'} 
                onClick={() => navigateTo('explore')} 
              />
              <SidebarLink 
                icon={<Users className="w-5 h-5" />} 
                label="Following" 
                active={currentView === 'following'} 
                onClick={() => navigateTo('following')} 
              />
            </nav>
          </div>

          <div className="space-y-4">
            <div className="px-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-outline">Discover</h3>
            </div>
            <nav className="space-y-1">
              <SidebarLink icon={<Shirt className="w-5 h-5" />} label="Fashion" />
              <SidebarLink icon={<Utensils className="w-5 h-5" />} label="Food" />
              <SidebarLink icon={<Plane className="w-5 h-5" />} label="Travel" />
            </nav>
          </div>

          <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10">
            <p className="text-xs font-bold text-primary mb-2">Join the Community</p>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">Share your moments and get inspired by world-class curators.</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 md:p-8">
          <AnimatePresence mode="wait">
            {currentView === 'home' && (
              <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <HomeView onPostClick={(post) => navigateTo('detail', post)} />
              </motion.div>
            )}
            {currentView === 'explore' && (
              <motion.div key="explore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <HomeView onPostClick={(post) => navigateTo('detail', post)} />
              </motion.div>
            )}
            {currentView === 'following' && (
              <motion.div key="following" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ConnectionsView />
              </motion.div>
            )}
            {currentView === 'profile' && (
              <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ProfileView onPostClick={(post) => navigateTo('detail', post)} />
              </motion.div>
            )}
            {currentView === 'create' && (
              <motion.div key="create" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <CreateView onCancel={() => navigateTo('home')} />
              </motion.div>
            )}
            {currentView === 'detail' && selectedPost && (
              <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DetailView 
                  post={selectedPost} 
                  onBack={() => navigateTo('home')} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 w-full h-16 glass-header border-t border-surface-container-high/10 md:hidden flex items-center justify-around z-50">
        <MobileNavLink icon={<Home className="w-6 h-6" />} label="Home" active={currentView === 'home'} onClick={() => navigateTo('home')} />
        <MobileNavLink icon={<Compass className="w-6 h-6" />} label="Explore" active={currentView === 'explore'} onClick={() => navigateTo('explore')} />
        <button 
          onClick={() => navigateTo('create')}
          className="bg-primary text-on-primary p-3 rounded-xl -mt-8 shadow-lg shadow-primary/30"
        >
          <Plus className="w-6 h-6" />
        </button>
        <MobileNavLink icon={<Bell className="w-6 h-6" />} label="Alerts" active={false} />
        <MobileNavLink icon={<UserIcon className="w-6 h-6" />} label="Profile" active={currentView === 'profile'} onClick={() => navigateTo('profile')} />
      </nav>
    </div>
  );
}

function SidebarLink({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-surface-container-high/50 text-primary translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

function MobileNavLink({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-on-surface-variant'}`}
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

const HomeView: React.FC<{ onPostClick: (post: Post) => void }> = ({ onPostClick }) => {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {MOCK_POSTS.map(post => (
          <PostCard key={post.id} post={post} onClick={() => onPostClick(post)} />
        ))}
      </div>
    </div>
  );
};

const PostCard: React.FC<{ post: Post, onClick: () => void }> = ({ post, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="masonry-item bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <div className={`relative overflow-hidden ${post.aspectRatio === 'portrait' ? 'aspect-[3/4]' : post.aspectRatio === 'tall' ? 'aspect-[4/5]' : post.aspectRatio === 'landscape' ? 'aspect-[3/2]' : 'aspect-square'}`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-md rounded-full p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Bookmark className="w-4 h-4" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-on-surface font-semibold text-sm leading-snug mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs text-on-surface-variant font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant group/like">
            <Heart className="w-4 h-4 group-hover/like:text-primary transition-colors" />
            <span className="text-[10px] font-bold">{post.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileView: React.FC<{ onPostClick: (post: Post) => void }> = ({ onPostClick }) => {
  const [activeTab, setActiveTab] = useState('Posts');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative w-full mb-12">
        <div className="h-64 md:h-80 w-full overflow-hidden rounded-3xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaiCUeO_FLdF6HoU_LcuQ9LHEnaUyoatSmqX-dLq0ehR0KNzAQOWTk4ySslyMqummCU9Yy6osJ2W39KGR85pTzJFLWt1d9jokpIA_tYZxzeZ3FURdHbOjYvA5kPRfB1_Um7ytdHezgBHfqZUOyuLb9AAVYoWsV7qd7d8y3k1ssNE2LTwwYgg5Op5Qoh5tbJUj7H0FJzvWgYdzSYeBOwC0U9jifFt91gEsp6beceg0c7wmbQoD34NS2q1Z8lvr35Hq9ZhW_4538qvKL" 
            alt="Header" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="px-6 relative">
          <div className="flex flex-col md:flex-row items-end -mt-20 md:-mt-24 gap-6 md:gap-10">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-[6px] border-surface p-1 bg-surface shadow-xl overflow-hidden">
              <img src={MOCK_USER.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="flex-1 pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface">{MOCK_USER.name}</h1>
                  <p className="text-secondary font-medium text-lg">@{MOCK_USER.username}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="bg-surface-container-highest text-on-surface px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-surface-container-high transition-colors">
                    Edit Profile
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-8 flex items-center bg-surface-container-low rounded-2xl p-1 gap-1 w-fit">
                <StatItem value={MOCK_USER.followers} label="Followers" />
                <StatItem value={MOCK_USER.following} label="Following" />
                <StatItem value={MOCK_USER.likes} label="Likes" />
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-2xl">
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">{MOCK_USER.bio}</p>
          </div>
        </div>
      </div>

      <div className="sticky top-20 bg-surface/90 backdrop-blur-md z-40 border-b border-surface-container-high/20 mb-12">
        <div className="flex gap-10">
          {['Posts', 'Collections', 'Likes'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-6 text-sm font-bold tracking-widest uppercase transition-colors ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="masonry-grid">
        {MOCK_POSTS.slice(0, 6).map(post => (
          <PostCard key={post.id} post={post} onClick={() => onPostClick(post)} />
        ))}
      </div>
    </div>
  );
};

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="px-6 py-3 text-center md:text-left">
      <span className="block text-xl font-bold font-headline text-on-surface">{value}</span>
      <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70">{label}</span>
    </div>
  );
}

const ConnectionsView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto pt-12">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">Followers</h1>
        <div className="flex items-center space-x-8 border-b border-surface-container-high/20">
          <button className="pb-4 border-b-2 border-primary text-on-surface font-bold text-sm tracking-tight">1.2k Followers</button>
          <button className="pb-4 text-on-surface-variant/50 hover:text-on-surface font-medium text-sm tracking-tight transition-colors">842 Following</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {FOLLOWERS.map(user => (
          <div key={user.id} className="group flex items-start space-x-6">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-surface-container-high ring-1 ring-surface-container-high/20">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg tracking-tight text-on-surface">{user.name}</h3>
                  <p className="text-xs font-bold tracking-[0.1em] text-primary/60 uppercase">@{user.username}</p>
                </div>
                <button className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${user.id === 'f2' ? 'bg-primary text-on-primary hover:opacity-90' : 'border border-surface-container-high text-on-surface hover:bg-on-surface hover:text-surface'}`}>
                  {user.id === 'f2' ? 'Follow Back' : 'Unfollow'}
                </button>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant/80 max-w-[280px]">{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-24 pt-12 border-t border-surface-container-high/10 flex justify-center">
        <button className="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 hover:text-primary transition-all">Load More Curators</button>
      </div>
    </div>
  );
};

const CreateView: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  return (
    <div className="max-w-6xl mx-auto pt-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="group relative aspect-[4/5] bg-surface-container-low rounded-[2rem] border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center p-12 transition-all hover:border-primary/40 hover:bg-surface-container-lowest">
            <div className="w-20 h-20 signature-gradient rounded-3xl flex items-center justify-center text-on-primary mb-6 shadow-xl shadow-primary/10 group-hover:scale-105 transition-transform">
              <Camera className="w-10 h-10" />
            </div>
            <h2 className="font-headline text-2xl font-bold mb-2 text-on-surface">Curate your visuals</h2>
            <p className="text-on-surface-variant text-center max-w-xs mb-8">Drag and drop your high-resolution imagery or browse your creative library.</p>
            <button className="px-8 py-3 bg-surface-container-highest text-primary font-semibold rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300">
              Select Media
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-surface-container rounded-xl overflow-hidden group">
              <img src="https://picsum.photos/seed/fashion1/400/400" alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="aspect-square bg-surface-container rounded-xl overflow-hidden group border-2 border-primary/20">
              <img src="https://picsum.photos/seed/watch/400/400" alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="aspect-square bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors">
              <Plus className="text-outline-variant" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-2">
            <label className="font-headline font-bold text-sm uppercase tracking-widest text-secondary">Article Title</label>
            <div className="relative">
              <input 
                type="text" 
                maxLength={60}
                placeholder="Give your story a name..."
                className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 font-headline text-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
              />
              <span className="absolute right-4 bottom-4 text-xs font-medium text-outline-variant">0/60</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-headline font-bold text-sm uppercase tracking-widest text-secondary">The Narrative</label>
            <textarea 
              rows={6}
              placeholder="Deep dive into the inspiration behind this curation..."
              className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 font-body text-base focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all resize-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-headline font-bold text-sm uppercase tracking-widest text-secondary">Location</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-4 text-primary w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Paris, France"
                  className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-headline font-bold text-sm uppercase tracking-widest text-secondary">Tags</label>
              <div className="relative flex items-center">
                <Tag className="absolute left-4 text-primary w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Fashion, Minimalist..."
                  className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {['#Editorial', '#Curation', '#Lifestyle'].map(tag => (
              <span key={tag} className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                {tag} <X className="w-3 h-3 cursor-pointer" />
              </span>
            ))}
          </div>
          <div className="pt-8 flex items-center justify-between gap-6 border-t border-surface-container-high/10">
            <button onClick={onCancel} className="text-on-surface-variant font-semibold hover:text-primary transition-colors">
              Save as Draft
            </button>
            <button className="signature-gradient text-on-primary font-headline font-bold px-12 py-4 rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <span>Publish</span>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailView: React.FC<{ post: Post, onBack: () => void }> = ({ post, onBack }) => {
  return (
    <div className="max-w-[1920px] mx-auto -m-4 md:-m-8">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <section className="w-full lg:w-3/5 xl:w-2/3 h-[500px] lg:h-[calc(100vh-5rem)] sticky lg:top-20 bg-surface-container-low overflow-hidden">
          <div className="relative h-full w-full">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              <button className="w-12 h-1.5 rounded-full bg-on-primary opacity-100 shadow-lg"></button>
              <button className="w-12 h-1.5 rounded-full bg-on-primary/40 hover:bg-on-primary/60 transition-colors shadow-lg"></button>
              <button className="w-12 h-1.5 rounded-full bg-on-primary/40 hover:bg-on-primary/60 transition-colors shadow-lg"></button>
            </div>
            <div className="absolute top-12 left-12 bg-surface/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-sm transform -rotate-2">
              <span className="font-headline font-extrabold text-primary tracking-tight text-xl">VOLUME 04 / ISSUE 12</span>
            </div>
            <button 
              onClick={onBack}
              className="absolute top-12 right-12 bg-surface/90 backdrop-blur-md p-3 rounded-full shadow-sm hover:bg-primary hover:text-on-primary transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </section>

        <section className="w-full lg:w-2/5 xl:w-1/3 bg-surface p-8 lg:p-12 overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface">{post.author.name}</h4>
                <p className="text-xs text-on-surface-variant font-medium">Lead Curator</p>
              </div>
            </div>
            <button className="px-5 py-2 rounded-full bg-surface-container-highest text-primary font-bold text-sm hover:bg-primary hover:text-on-primary transition-all duration-300">
              Follow
            </button>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex gap-2">
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase">Editorial</span>
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase">{post.category}</span>
            </div>
            <h1 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tighter leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>{post.date || 'December 12, 2023'}</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span>{post.readTime || '8 min read'}</span>
            </div>
          </div>

          <div className="prose prose-stone mb-10">
            <p className="text-lg leading-relaxed text-on-surface-variant font-body">
              {post.content || "In the intersection of structural design and fluid motion, we find the core of modern aesthetics. This collection explores how silhouettes can redefine spatial awareness, turning the body into a living sculpture."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags?.map(tag => (
              <span key={tag} className="text-secondary font-medium text-sm">{tag}</span>
            ))}
          </div>

          <div className="flex items-center justify-between py-6 border-y border-surface-container-high/20 mb-12">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 group">
                <Heart className="w-6 h-6 group-hover:text-primary transition-colors" />
                <span className="text-sm font-bold text-on-surface-variant">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 group">
                <Bookmark className="w-6 h-6 group-hover:text-primary transition-colors" />
                <span className="text-sm font-bold text-on-surface-variant">Save</span>
              </button>
              <button className="flex items-center gap-2 group">
                <Share2 className="w-6 h-6 group-hover:text-primary transition-colors" />
                <span className="text-sm font-bold text-on-surface-variant">Share</span>
              </button>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8 pb-20">
            <h3 className="font-headline font-bold text-xl text-on-surface">Comments ({MOCK_COMMENTS.length})</h3>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                <img src={MOCK_USER.avatar} alt="Me" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-3">
                <textarea 
                  className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm min-h-[80px] p-4 placeholder-on-surface-variant/60" 
                  placeholder="Add a thoughtful comment..."
                />
                <div className="flex justify-end">
                  <button className="signature-gradient text-on-primary px-6 py-2 rounded-full font-bold text-sm shadow-sm scale-95 active:scale-90 transition-transform">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {MOCK_COMMENTS.map(comment => (
                <div key={comment.id} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-on-surface">{comment.author}</span>
                      <span className="text-[10px] text-on-surface-variant font-medium">{comment.time}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{comment.content}</p>
                    <div className="flex gap-4 mt-2">
                      <button className="text-[11px] font-bold text-primary">Reply</button>
                      <button className="text-[11px] font-bold text-on-surface-variant flex items-center gap-1">
                        <Heart className="w-3 h-3" /> {comment.likes}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
