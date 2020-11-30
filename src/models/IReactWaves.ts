import React from "react";
import { WaveSurferParams } from "wavesurfer.js";

export interface AudioPropsOnReady {
	wavesurfer: WaveSurfer;
	originalArgs: number[];
}

export interface AudioProps {
	style?: React.CSSProperties;
	className?: string;
	playing?: boolean;
	pos?: number;
	audioFile?: string;
	mediaElt?: string | HTMLElement;
	audioPeaks?: number[];
	volume?: number;
	zoom?: number;
	onReady?: (ev: AudioPropsOnReady) => void;
	onPosChange?: (current_time: number, wavesurfer: WaveSurfer) => void;
	onFinish?: (ev: AudioPropsOnReady) => void;
	options?: WaveSurferParams;
	spectrogramOptions?: object;
	timelineOptions?: object;
}
