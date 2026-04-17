import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.STRAPI_URL || 'http://localhost:1337/api',
});

// Helper for image URLs or other attributes inside Strapi 5 structure
export const getStrapiURL = (path) => path ? `http://localhost:1337${path}` : '';

export const fetchFeatures = async () => {
    try {
        const res = await api.get('/features?populate=*');
        return res.data.data;
    } catch { return []; }
};

export const fetchSolutions = async () => {
    try {
        const res = await api.get('/solutions?populate=*');
        return res.data.data;
    } catch { return []; }
};

export const fetchSectors = async () => {
    try {
        const res = await api.get('/sectors?populate=*');
        return res.data.data;
    } catch { return []; }
};

export const fetchSuccessCases = async () => {
    try {
        const res = await api.get('/success-cases?populate=*');
        return res.data.data;
    } catch { return []; }
};

export const fetchBlogs = async () => {
    try {
        const res = await api.get('/blogs?populate=*');
        return res.data.data;
    } catch { return []; }
};

export const fetchIntegrations = async () => {
    try {
        const res = await api.get('/integrations?populate=*');
        return res.data.data;
    } catch { return []; }
};

export default api;
