export interface MaskTypeInterface {
    id: string;
    type: string;
}

export const MaskTypes: Array<MaskTypeInterface> =
    [
        { id: '1', type: 'money' },
        { id: '2', type: 'number' },
        { id: '3', type: 'name' },
        { id: '4', type: 'default' }
    ];
