import { getColorByType } from '../../utils/colorUtils.js';
import { getTypeNameRu } from '../../utils/localizationUtils.js';
import './TypeBadge.css';

export const TypeBadge = ({ type, onClick, isActive = false, large = false }) => {

    const backgroundColor = getColorByType(type);
    const displayName = getTypeNameRu(type);

    const badgeClasses = [
        'type-badge',
        large ? 'large' : '',
        isActive ? 'active' : '',
        onClick ? 'clickable' : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={ badgeClasses }
            style={{ backgroundColor }}
            onClick={ onClick ? () => onClick(type) : undefined }
        >
            { displayName }
        </div>
    );
};