export interface Category {
    id: number;
    name: string;
    description: null|string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}