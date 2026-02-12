const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:8000/api' : 'https://backend.metavaratechnologies.com/api';

async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
        headers: {
            ...options.headers,
        },
        ...options,
    };

    if (!(options.body instanceof FormData)) {
        config.headers['Content-Type'] = 'application/json';
    }

    try {
        const response = await fetch(url, config);

        const contentType = response.headers.get('content-type');

        if (contentType && !contentType.includes('application/json')) {
            if (response.ok) return response;
            throw new Error('Request failed');
        }

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error || data?.message || 'Request failed');
        }

        return data;

    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
}

const apiService = {

    getPositions: async () => {
        try {
            const response = await apiRequest('/applications/positions/');


            if (Array.isArray(response)) {
                return response;
            }

            if (Array.isArray(response?.positions)) {
                return response.positions;
            }

            if (Array.isArray(response?.results)) {
                return response.results;
            }

            return [];

        } catch (error) {
            console.error("Failed to fetch positions:", error);
            return [];
        }
    },

    getPosition: async (id) => {
        try {
            return await apiRequest(`/applications/positions/${id}/`);
        } catch {
            return null;
        }
    },

    submitApplication: async (applicationData, resumeFile = null) => {
        const formData = new FormData();
        formData.append('name', applicationData.name);
        formData.append('email', applicationData.email);
        formData.append('phone', applicationData.phone);
        formData.append('position', applicationData.position);

        if (resumeFile) {
            formData.append('resume', resumeFile);
        }

        return apiRequest('/applications/submit/', {
            method: 'POST',
            body: formData,
        });
    },

    getApplications: async (token) => {
        try {
            const response = await apiRequest('/applications/list/', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (Array.isArray(response)) return response;
            if (Array.isArray(response?.applications)) return response.applications;
            if (Array.isArray(response?.results)) return response.results;

            return [];

        } catch {
            return [];
        }
    },

    downloadResume: async (applicationId, token) => {
        return apiRequest(`/applications/${applicationId}/resume/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    },

    submitLead: async (leadData) => {
        return apiRequest('/leads/contact/', {
            method: 'POST',
            body: JSON.stringify(leadData),
        });
    },
};

export default apiService;