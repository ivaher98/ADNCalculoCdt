export interface MaskTypeInterface {
    id: string;
    type: string;
}

export const MaskTypes: Array<MaskTypeInterface> =
    [
        { id: '1', type: 'money' },
        { id: '2', type: 'default' }
    ]