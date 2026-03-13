import React, { useState, useEffect } from 'react';
import { useContent } from '@/hooks/useContent';
import { Save, Download, RotateCcw, LogOut, ChevronDown, ChevronRight, Plus, Trash2, Eye } from 'lucide-react';

// ── Credentials ──
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';
const AUTH_KEY = 'admin-auth';

// ── Helpers ──
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const SectionHeader = ({ title, isOpen, onClick }) => (
    <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-750 rounded-xl transition-colors text-left"
    >
        <span className="text-lg font-semibold text-white">{title}</span>
        {isOpen ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
    </button>
);

const Field = ({ label, value, onChange, multiline = false, small = false }) => (
    <div className={small ? 'flex-1 min-w-0' : 'mb-4'}>
        <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        {multiline ? (
            <textarea
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                rows={3}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1CAEC1] focus:border-transparent resize-y"
            />
        ) : (
            <input
                type="text"
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1CAEC1] focus:border-transparent"
            />
        )}
    </div>
);

// ── Login ──
const LoginForm = ({ onLogin }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === ADMIN_USER && pass === ADMIN_PASS) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            onLogin();
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1CAEC1] to-[#0E2B43] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">SC</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
                    <p className="text-gray-500 mt-1">SaludCheck365</p>
                </div>
                <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3 mb-4">
                            {error}
                        </div>
                    )}
                    <Field label="Usuario" value={user} onChange={setUser} />
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Contraseña</label>
                        <input
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1CAEC1] focus:border-transparent"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#1CAEC1] to-[#0E2B43] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

// ── Section Editors ──

const MetaEditor = ({ data = {}, onChange }) => (
    <div className="space-y-2 p-4">
        <Field label="Título de la página" value={data.title} onChange={(v) => onChange({ ...data, title: v })} />
        <Field label="Meta descripción" value={data.description} onChange={(v) => onChange({ ...data, description: v })} multiline />
    </div>
);

const HeaderEditor = ({ data = { navLinks: [] }, onChange }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });
    const updateLink = (i, key, val) => {
        const links = [...data.navLinks];
        links[i] = { ...links[i], [key]: val };
        update('navLinks', links);
    };
    const addLink = () => update('navLinks', [...data.navLinks, { name: '', href: '#' }]);
    const removeLink = (i) => update('navLinks', data.navLinks.filter((_, idx) => idx !== i));

    return (
        <div className="space-y-4 p-4">
            <Field label="Texto del botón CTA" value={data.ctaText} onChange={(v) => update('ctaText', v)} />
            <Field label="Texto footer móvil" value={data.mobileFooterText} onChange={(v) => update('mobileFooterText', v)} />
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Enlaces de navegación</span>
                    <button onClick={addLink} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-sm flex items-center gap-1"><Plus className="w-4 h-4" /> Añadir</button>
                </div>
                {data.navLinks.map((link, i) => (
                    <div key={i} className="flex gap-2 mb-2 items-end">
                        <Field label="Nombre" value={link.name} onChange={(v) => updateLink(i, 'name', v)} small />
                        <Field label="Enlace" value={link.href} onChange={(v) => updateLink(i, 'href', v)} small />
                        <button onClick={() => removeLink(i)} className="text-red-400 hover:text-red-300 p-2 mb-1"><Trash2 className="w-4 h-4" /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HeroEditor = ({ data = {}, onChange }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });
    return (
        <div className="space-y-2 p-4">
            <Field label="Badge" value={data.badge} onChange={(v) => update('badge', v)} />
            <Field label="Título línea 1" value={data.titleLine1} onChange={(v) => update('titleLine1', v)} />
            <Field label="Título línea 2 (gradiente)" value={data.titleLine2} onChange={(v) => update('titleLine2', v)} />
            <Field label="Descripción" value={data.description} onChange={(v) => update('description', v)} multiline />
            <Field label="Texto de confianza" value={data.trustText} onChange={(v) => update('trustText', v)} />
            <div className="border-t border-gray-700 pt-4 mt-4">
                <span className="text-sm font-medium text-gray-400 block mb-2">Slides</span>
                {(data.slides || []).map((slide, i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-3 mb-2">
                        <Field label={`Slide ${i + 1} — Badge título`} value={slide.badgeTitle} onChange={(v) => {
                            const slides = [...data.slides];
                            slides[i] = { ...slides[i], badgeTitle: v };
                            update('slides', slides);
                        }} />
                        <Field label="Badge subtítulo" value={slide.badgeSub} onChange={(v) => {
                            const slides = [...data.slides];
                            slides[i] = { ...slides[i], badgeSub: v };
                            update('slides', slides);
                        }} />
                        <Field label="Imagen (ruta)" value={slide.img} onChange={(v) => {
                            const slides = [...data.slides];
                            slides[i] = { ...slides[i], img: v };
                            update('slides', slides);
                        }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const FeaturesListEditor = ({ data = {}, onChange, featureKey = 'features' }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });
    const items = data[featureKey] || [];
    const updateItem = (i, key, val) => {
        const arr = [...items];
        arr[i] = { ...arr[i], [key]: val };
        update(featureKey, arr);
    };
    const addItem = () => update(featureKey, [...items, { icon: '', title: '', description: '' }]);
    const removeItem = (i) => update(featureKey, items.filter((_, idx) => idx !== i));

    return (
        <div className="space-y-2 p-4">
            {data.label !== undefined && <Field label="Etiqueta" value={data.label} onChange={(v) => update('label', v)} />}
            <Field label="Título" value={data.title} onChange={(v) => update('title', v)} />
            {data.titleHighlight !== undefined && <Field label="Título destacado" value={data.titleHighlight} onChange={(v) => update('titleHighlight', v)} />}
            {data.subtitle !== undefined && <Field label="Subtítulo" value={data.subtitle} onChange={(v) => update('subtitle', v)} multiline />}
            {data.description !== undefined && <Field label="Descripción" value={data.description} onChange={(v) => update('description', v)} multiline />}
            <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Elementos</span>
                    <button onClick={addItem} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-sm flex items-center gap-1"><Plus className="w-4 h-4" /> Añadir</button>
                </div>
                {items.map((item, i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-3 mb-2 relative">
                        <button onClick={() => removeItem(i)} className="absolute top-2 right-2 text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                        <Field label="Título" value={item.title} onChange={(v) => updateItem(i, 'title', v)} />
                        <Field label="Descripción" value={item.description || item.desc} onChange={(v) => updateItem(i, item.desc !== undefined ? 'desc' : 'description', v)} multiline />
                    </div>
                ))}
            </div>
        </div>
    );
};

const HowItWorksEditor = ({ data = {}, onChange }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });
    const steps = data.steps || [];
    const updateStep = (i, key, val) => {
        const arr = [...steps];
        arr[i] = { ...arr[i], [key]: val };
        update('steps', arr);
    };
    const addStep = () => update('steps', [...steps, { icon: 'Smartphone', title: '', description: '', color: 'bg-blue-100 text-blue-600' }]);
    const removeStep = (i) => update('steps', steps.filter((_, idx) => idx !== i));

    return (
        <div className="space-y-2 p-4">
            <Field label="Título" value={data.title} onChange={(v) => update('title', v)} />
            <Field label="Subtítulo" value={data.subtitle} onChange={(v) => update('subtitle', v)} multiline />
            <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Pasos</span>
                    <button onClick={addStep} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-sm flex items-center gap-1"><Plus className="w-4 h-4" /> Añadir</button>
                </div>
                {steps.map((step, i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-3 mb-2 relative">
                        <button onClick={() => removeStep(i)} className="absolute top-2 right-2 text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                        <Field label="Título" value={step.title} onChange={(v) => updateStep(i, 'title', v)} />
                        <Field label="Descripción" value={step.description} onChange={(v) => updateStep(i, 'description', v)} multiline />
                    </div>
                ))}
            </div>
        </div>
    );
};

const MedicalHistoryEditor = ({ data = {}, onChange }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });
    const checkpoints = data.checkpoints || [];
    const updateCheckpoint = (i, val) => {
        const arr = [...checkpoints];
        arr[i] = val;
        update('checkpoints', arr);
    };
    const addCheckpoint = () => update('checkpoints', [...checkpoints, '']);
    const removeCheckpoint = (i) => update('checkpoints', checkpoints.filter((_, idx) => idx !== i));

    return (
        <div className="space-y-2 p-4">
            <Field label="Título" value={data.title} onChange={(v) => update('title', v)} />
            <Field label="Texto intermedio" value={data.titleMiddle} onChange={(v) => update('titleMiddle', v)} />
            <Field label="Texto destacado" value={data.titleHighlight} onChange={(v) => update('titleHighlight', v)} />
            <Field label="Descripción" value={data.description} onChange={(v) => update('description', v)} multiline />
            <Field label="Badge flotante — título" value={data.floatingBadge?.title} onChange={(v) => update('floatingBadge', { ...data.floatingBadge, title: v })} />
            <Field label="Badge flotante — subtítulo" value={data.floatingBadge?.subtitle} onChange={(v) => update('floatingBadge', { ...data.floatingBadge, subtitle: v })} />
            <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Checkpoints</span>
                    <button onClick={addCheckpoint} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-sm flex items-center gap-1"><Plus className="w-4 h-4" /> Añadir</button>
                </div>
                {checkpoints.map((cp, i) => (
                    <div key={i} className="flex gap-2 mb-2 items-end">
                        <Field label={`#${i + 1}`} value={cp} onChange={(v) => updateCheckpoint(i, v)} small />
                        <button onClick={() => removeCheckpoint(i)} className="text-red-400 hover:text-red-300 p-2 mb-1"><Trash2 className="w-4 h-4" /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PricingEditor = ({ data = {}, onChange }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });
    const updateFree = (key, val) => update('freePlan', { ...data.freePlan, [key]: val });
    const updatePremium = (key, val) => update('premiumPlan', { ...data.premiumPlan, [key]: val });

    const updateFreeFeature = (i, key, val) => {
        const arr = [...(data.freePlan.features || [])];
        arr[i] = { ...arr[i], [key]: val };
        updateFree('features', arr);
    };
    const addFreeFeature = () => updateFree('features', [...(data.freePlan.features || []), { text: '', included: true }]);
    const removeFreeFeature = (i) => updateFree('features', data.freePlan.features.filter((_, idx) => idx !== i));

    const updatePremiumFeature = (i, val) => {
        const arr = [...(data.premiumPlan.features || [])];
        arr[i] = val;
        updatePremium('features', arr);
    };
    const addPremiumFeature = () => updatePremium('features', [...(data.premiumPlan.features || []), '']);
    const removePremiumFeature = (i) => updatePremium('features', data.premiumPlan.features.filter((_, idx) => idx !== i));

    return (
        <div className="space-y-2 p-4">
            <Field label="Etiqueta" value={data.label} onChange={(v) => update('label', v)} />
            <Field label="Título" value={data.title} onChange={(v) => update('title', v)} />
            <Field label="Subtítulo" value={data.subtitle} onChange={(v) => update('subtitle', v)} multiline />
            <Field label="Nota al pie" value={data.footnote} onChange={(v) => update('footnote', v)} />

            {/* Free Plan */}
            <div className="border-t border-gray-700 pt-4 mt-4">
                <span className="text-sm font-bold text-[#1CAEC1] block mb-2">Plan Gratuito</span>
                <Field label="Nombre" value={data.freePlan?.name} onChange={(v) => updateFree('name', v)} />
                <Field label="Descripción" value={data.freePlan?.description} onChange={(v) => updateFree('description', v)} />
                <div className="flex gap-2">
                    <Field label="Precio" value={data.freePlan?.price} onChange={(v) => updateFree('price', v)} small />
                    <Field label="Período" value={data.freePlan?.pricePeriod} onChange={(v) => updateFree('pricePeriod', v)} small />
                </div>
                <Field label="Texto botón" value={data.freePlan?.cta} onChange={(v) => updateFree('cta', v)} />
                <div className="flex items-center justify-between mt-2 mb-2">
                    <span className="text-xs text-gray-500">Características</span>
                    <button onClick={addFreeFeature} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-xs flex items-center gap-1"><Plus className="w-3 h-3" /> Añadir</button>
                </div>
                {(data.freePlan?.features || []).map((f, i) => (
                    <div key={i} className="flex gap-2 mb-2 items-end">
                        <Field label="Texto" value={f.text} onChange={(v) => updateFreeFeature(i, 'text', v)} small />
                        <label className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap pb-2">
                            <input type="checkbox" checked={f.included} onChange={(e) => updateFreeFeature(i, 'included', e.target.checked)} className="rounded" />
                            Incluido
                        </label>
                        <button onClick={() => removeFreeFeature(i)} className="text-red-400 hover:text-red-300 p-1 mb-1"><Trash2 className="w-3 h-3" /></button>
                    </div>
                ))}
            </div>

            {/* Premium Plan */}
            <div className="border-t border-gray-700 pt-4 mt-4">
                <span className="text-sm font-bold text-[#F07C49] block mb-2">Plan Premium</span>
                <Field label="Nombre" value={data.premiumPlan?.name} onChange={(v) => updatePremium('name', v)} />
                <Field label="Descripción" value={data.premiumPlan?.description} onChange={(v) => updatePremium('description', v)} />
                <div className="flex gap-2">
                    <Field label="Precio" value={data.premiumPlan?.price} onChange={(v) => updatePremium('price', v)} small />
                    <Field label="Período" value={data.premiumPlan?.pricePeriod} onChange={(v) => updatePremium('pricePeriod', v)} small />
                </div>
                <Field label="Badge" value={data.premiumPlan?.badge} onChange={(v) => updatePremium('badge', v)} />
                <Field label="Texto botón" value={data.premiumPlan?.cta} onChange={(v) => updatePremium('cta', v)} />
                <div className="flex items-center justify-between mt-2 mb-2">
                    <span className="text-xs text-gray-500">Características (soporta HTML: &lt;strong&gt;)</span>
                    <button onClick={addPremiumFeature} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-xs flex items-center gap-1"><Plus className="w-3 h-3" /> Añadir</button>
                </div>
                {(data.premiumPlan?.features || []).map((f, i) => (
                    <div key={i} className="flex gap-2 mb-2 items-end">
                        <Field label={`#${i + 1}`} value={f} onChange={(v) => updatePremiumFeature(i, v)} small />
                        <button onClick={() => removePremiumFeature(i)} className="text-red-400 hover:text-red-300 p-1 mb-1"><Trash2 className="w-3 h-3" /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TeamEditor = ({ data = {}, onChange }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });
    const members = data.members || [];
    const updateMember = (i, key, val) => {
        const arr = [...members];
        arr[i] = { ...arr[i], [key]: val };
        update('members', arr);
    };
    const addMember = () => update('members', [...members, { name: '', role: '', location: '', image: '', bio: '' }]);
    const removeMember = (i) => update('members', members.filter((_, idx) => idx !== i));

    return (
        <div className="space-y-2 p-4">
            <Field label="Etiqueta" value={data.label} onChange={(v) => update('label', v)} />
            <Field label="Título" value={data.title} onChange={(v) => update('title', v)} />
            <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">Miembros del equipo</span>
                    <button onClick={addMember} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-sm flex items-center gap-1"><Plus className="w-4 h-4" /> Añadir</button>
                </div>
                {members.map((m, i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-3 mb-2 relative">
                        <button onClick={() => removeMember(i)} className="absolute top-2 right-2 text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                        <Field label="Nombre" value={m.name} onChange={(v) => updateMember(i, 'name', v)} />
                        <Field label="Rol" value={m.role} onChange={(v) => updateMember(i, 'role', v)} />
                        <Field label="Ubicación" value={m.location} onChange={(v) => updateMember(i, 'location', v)} />
                        <Field label="Imagen (ruta)" value={m.image} onChange={(v) => updateMember(i, 'image', v)} />
                        <Field label="Bio" value={m.bio} onChange={(v) => updateMember(i, 'bio', v)} multiline />
                    </div>
                ))}
            </div>
        </div>
    );
};

const FooterEditor = ({ data = {}, onChange }) => {
    const update = (key, val) => onChange({ ...data, [key]: val });

    const LinkListEditor = ({ title, stateKey, links }) => {
        const updateLink = (i, key, val) => {
            const arr = [...links];
            arr[i] = { ...arr[i], [key]: val };
            update(stateKey, arr);
        };
        const addLink = () => update(stateKey, [...links, { name: '', href: '#' }]);
        const removeLink = (i) => update(stateKey, links.filter((_, idx) => idx !== i));

        return (
            <div className="mt-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500">{title}</span>
                    <button onClick={addLink} className="text-[#1CAEC1] hover:text-[#1CAEC1]/80 text-xs flex items-center gap-1"><Plus className="w-3 h-3" /> Añadir</button>
                </div>
                {links.map((link, i) => (
                    <div key={i} className="flex gap-2 mb-1 items-end">
                        <Field label="Nombre" value={link.name} onChange={(v) => updateLink(i, 'name', v)} small />
                        <Field label="Enlace" value={link.href} onChange={(v) => updateLink(i, 'href', v)} small />
                        <button onClick={() => removeLink(i)} className="text-red-400 hover:text-red-300 p-1 mb-1"><Trash2 className="w-3 h-3" /></button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="space-y-2 p-4">
            <Field label="Descripción" value={data.description} onChange={(v) => update('description', v)} multiline />
            <Field label="Título columna Producto" value={data.productTitle} onChange={(v) => update('productTitle', v)} />
            <Field label="Título columna Compañía" value={data.companyTitle} onChange={(v) => update('companyTitle', v)} />
            <Field label="Título columna Legal" value={data.legalTitle} onChange={(v) => update('legalTitle', v)} />
            <Field label="Copyright" value={data.copyright} onChange={(v) => update('copyright', v)} />
            <Field label="Texto derechos" value={data.rightsText} onChange={(v) => update('rightsText', v)} />
            <Field label="Hecho en..." value={data.madeIn} onChange={(v) => update('madeIn', v)} />
            <Field label="Texto de estado" value={data.statusText} onChange={(v) => update('statusText', v)} />

            <div className="border-t border-gray-700 pt-4 mt-4">
                <LinkListEditor title="Enlaces Producto" stateKey="productLinks" links={data.productLinks || []} />
                <LinkListEditor title="Enlaces Compañía" stateKey="companyLinks" links={data.companyLinks || []} />
                <LinkListEditor title="Enlaces Legal" stateKey="legalLinks" links={data.legalLinks || []} />
            </div>

            <div className="border-t border-gray-700 pt-4 mt-4">
                <span className="text-xs font-medium text-gray-500 block mb-2">Redes Sociales</span>
                {(data.socialLinks || []).map((s, i) => (
                    <div key={i} className="flex gap-2 mb-1 items-end">
                        <Field label="Red" value={s.name} onChange={(v) => {
                            const arr = [...(data.socialLinks || [])];
                            arr[i] = { ...arr[i], name: v };
                            update('socialLinks', arr);
                        }} small />
                        <Field label="URL" value={s.href} onChange={(v) => {
                            const arr = [...(data.socialLinks || [])];
                            arr[i] = { ...arr[i], href: v };
                            update('socialLinks', arr);
                        }} small />
                    </div>
                ))}
            </div>
        </div>
    );
};


// ── Main Admin Panel ──
const AdminPanel = () => {
    const { content, loading, updateContent, resetContent } = useContent();
    const [draft, setDraft] = useState(null);
    const [openSections, setOpenSections] = useState({ meta: true });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (content && !draft) {
            setDraft(deepClone(content));
        }
    }, [content]);

    if (loading || !draft) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#1CAEC1] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const toggle = (section) => setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

    const handleSave = () => {
        updateContent(draft);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'content.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleReset = () => {
        if (window.confirm('¿Restaurar todos los textos a los originales? Se perderán los cambios guardados.')) {
            resetContent();
            setDraft(null);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem(AUTH_KEY);
        window.location.reload();
    };

    const updateSection = (section, data) => {
        setDraft((prev) => ({ ...prev, [section]: data }));
    };

    const sections = [
        { key: 'meta', title: '📄 Meta (SEO)', editor: <MetaEditor data={draft.meta} onChange={(d) => updateSection('meta', d)} /> },
        { key: 'header', title: '🔝 Header / Navegación', editor: <HeaderEditor data={draft.header} onChange={(d) => updateSection('header', d)} /> },
        { key: 'hero', title: '🦸 Hero / Principal', editor: <HeroEditor data={draft.hero} onChange={(d) => updateSection('hero', d)} /> },
        { key: 'whatIs', title: '❓ Qué es', editor: <FeaturesListEditor data={draft.whatIs} onChange={(d) => updateSection('whatIs', d)} /> },
        { key: 'howItWorks', title: '⚙️ Cómo funciona', editor: <HowItWorksEditor data={draft.howItWorks} onChange={(d) => updateSection('howItWorks', d)} /> },
        { key: 'features', title: '✨ Características', editor: <FeaturesListEditor data={draft.features} onChange={(d) => updateSection('features', d)} featureKey="items" /> },
        { key: 'medicalHistory', title: '🧬 Inteligencia Artificial', editor: <MedicalHistoryEditor data={draft.medicalHistory} onChange={(d) => updateSection('medicalHistory', d)} /> },
        { key: 'pricing', title: '💰 Precios', editor: <PricingEditor data={draft.pricing} onChange={(d) => updateSection('pricing', d)} /> },
        { key: 'team', title: '👥 Equipo', editor: <TeamEditor data={draft.team} onChange={(d) => updateSection('team', d)} /> },
        { key: 'footer', title: '🔽 Footer', editor: <FooterEditor data={draft.footer} onChange={(d) => updateSection('footer', d)} /> },
    ];

    return (
        <div className="min-h-screen bg-gray-950">
            {/* Top Bar */}
            <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1CAEC1] to-[#0E2B43] rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-white">SC</span>
                        </div>
                        <span className="text-white font-semibold hidden sm:block">Panel de Contenidos</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <Eye className="w-4 h-4" />
                            <span className="hidden sm:inline">Ver web</span>
                        </a>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" />
                            <span className="hidden sm:inline">Restaurar</span>
                        </button>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">Descargar</span>
                        </button>
                        <button
                            onClick={handleSave}
                            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${saved
                                ? 'bg-green-500 text-white'
                                : 'bg-[#1CAEC1] text-white hover:bg-[#1593a3]'
                                }`}
                        >
                            <Save className="w-4 h-4" />
                            {saved ? '¡Guardado!' : 'Guardar'}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1.5 px-3 py-2 text-sm text-red-400 hover:text-red-300 rounded-lg hover:bg-gray-800 transition-colors ml-2"
                        >
                            <LogOut className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="space-y-3">
                    {sections.map(({ key, title, editor }) => (
                        <div key={key} className="rounded-xl border border-gray-800 overflow-hidden">
                            <SectionHeader title={title} isOpen={openSections[key]} onClick={() => toggle(key)} />
                            {openSections[key] && (
                                <div className="bg-gray-850 border-t border-gray-800">
                                    {editor}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 max-w-lg w-full">
                        <h2 className="text-xl font-bold text-red-500 mb-2">Error en el panel</h2>
                        <p className="text-gray-300 text-sm mb-4">Se ha producido un error inesperado. Si el problema persiste, intenta vaciar la caché de la página o restaura los datos.</p>
                        <pre className="bg-gray-900 text-red-400 p-3 rounded text-xs mb-4 overflow-x-auto">
                            {this.state.error?.toString()}
                        </pre>
                        <button 
                            onClick={() => {
                                localStorage.removeItem('site-content');
                                sessionStorage.removeItem('admin-auth');
                                window.location.reload();
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors"
                        >
                            Borrar caché y recargar
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

// ── Page Wrapper ──
const AdminPage = () => {
    const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(AUTH_KEY) === 'true');

    if (!authenticated) {
        return <LoginForm onLogin={() => setAuthenticated(true)} />;
    }

    return (
        <ErrorBoundary>
            <AdminPanel />
        </ErrorBoundary>
    );
};

export default AdminPage;
