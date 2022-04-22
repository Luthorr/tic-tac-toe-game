import Icon from '../Icon/Icon';
import styles from './Tile.module.scss';
import { TileProps } from './TIle.types';
import classnames from 'classnames';
import { CROSS, NOUGHT } from '../../../constants/Game.constants';

const Tile = ({ value, gameEnded, onTileClick, winningTile }: TileProps) => {
  const handleClick = (): void => {
    !value && !gameEnded && onTileClick();
  };

  return (
    <div
      className={classnames(styles.container, {
        [styles.winningTileCross]: value === CROSS && winningTile,
        [styles.winningTileNought]: value === NOUGHT && winningTile,
      })}
      onClick={handleClick}
    >
      <Icon name={value} winningIcon={winningTile} />
    </div>
  );
};

export default Tile;
