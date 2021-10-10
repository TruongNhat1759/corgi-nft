import React, { useState, useEffect, useCallback } from 'react';

import { Stage } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import Spine from './Spine';

(window as any).PIXI = PIXI;

const mixes = [
  {
    from: 'animation',
    to: 'animation',
    duration: 0.2,
  },
  {
    from: 'animation',
    to: 'animation',
    duration: 0.4,
  },
  {
    from: 'animation',
    to: 'animation',
    duration: 0.4,
  },
];

type IProps = {
  link: string;
  name: string;
};

const AnimationDomDom = (props: IProps) => {
  const [spineData, setSpineData] = useState();
  const [animationState, setAnimationState] = useState();

  useEffect(() => {
    const initSpine = async () => {
      const loader = new PIXI.Loader();
      loader.add(props.name, props.link).load((_, res) => {
        setSpineData((res as any)[props.name].spineData);
      });
    };
    initSpine();
  }, [props.link, props.name]);

  const stateRef = useCallback((state: any) => {
    if (state) {
      state.setAnimation(0, 'animation', false);
      state.addAnimation(0, 'animation', true, 0);
    }
    setAnimationState(state);
  }, []);

  const loadAnimation = useCallback(() => {
    if (animationState) {
      (animationState as any).setAnimation(0, 'animation', false);
      (animationState as any).addAnimation(0, 'animation', true, 0);
    }
  }, [animationState]);

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setSizeScreen(window.innerWidth);
    };
  }, [sizeScreen]);
  return (
    <div className="h-full rounded" onClick={loadAnimation} role="none">
      <Stage
        className="rounded-lg"
        options={{ transparent: true }}
        width={sizeScreen > 1360 ? 660 : 355}
        height={sizeScreen > 1360 ? 592 : 280}
      >
        {spineData && (
          <Spine
            scale={sizeScreen > 1360 ? 3 : 1.5}
            x={sizeScreen > 1360 ? 260 : 150}
            y={sizeScreen > 1360 ? 540 : 280}
            spineData={spineData}
            mixes={mixes}
            animationStateCallback={stateRef}
          />
        )}
      </Stage>
      <style >
        {`
          canvas {
            position: absolute;
            top: 0;
            left: 0;
          }
        `}
      </style>
    </div>
  );
};

export default AnimationDomDom;