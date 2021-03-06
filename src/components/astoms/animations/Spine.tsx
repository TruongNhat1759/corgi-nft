import { PixiComponent, applyDefaultProps } from '@inlet/react-pixi';
import { Spine } from 'pixi-spine';

interface SpineMix {
  from: string;
  to: string;
  duration: number;
}

interface Props {
  x?: number;
  y?: number;
  spineData: any;
  scale?: number;
  visible?: boolean;
  tint?: number;
  delayLimit?: number;
  mixes?: SpineMix[];
  animationStateCallback?: (ref: any) => void;
}

export default PixiComponent<Props, any>('Spine', {
  create: ({ spineData }) => {
    const spine = new Spine(spineData);
    return spine;
  },
  applyProps: (instance, oldProps, newProps) => {
    const { mixes = [], scale = 1, animationStateCallback, ...newP } = newProps;
    applyDefaultProps(instance, oldProps, newP);
    instance.scale.set(scale);
    mixes.forEach((mix) =>
      instance.stateData.setMix(mix.from, mix.to, mix.duration)
    );
    if (animationStateCallback) {
      animationStateCallback(instance.state);
    }
  },
  config: {
    destroy: false, // we don't want to auto destroy the instance on unmount
    destroyChildren: false, // we also don't want to destroy its children on unmount
  },
});
