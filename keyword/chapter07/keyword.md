# KEYWORD 정리
## 낙관적 정리
- 어떤 상황에서 **낙관적 업데이트(OptimisticUpdate)가 효율적일까요? 🍠**
    
    # 어떤 상황에서 **낙관적 업데이트(OptimisticUpdate)가 효율적일까요? 🍠**
    
    ---
    
    > **낙관적 업데이트(OptimisticUpdate)가 효율적인 상황은 언제일까요? 🍠**
    > 
    
    <aside>
    📌
    
    낙관적 업데이트는 주로 **성공 확률이 높고** **즉각적인 피드백이 중요할 때** 쓰인다
    
    - **즉각적인 반응이 필요한 '좋아요'나 '즐겨찾기'**
        - 인스타그램의 하트를 누를 때 서버 응답을 기다렸다가 하트가 빨갛게 변한다면 유저는 앱이 느리다고 느낀다. 바로 색이 변해야 최상의 UX를 제공할 수 있다.
    - **텍스트 위주의 가벼운 수정**
        - 댓글의 내용을 수정하거나 간단한 상태 메시지를 바꿀 때처럼 데이터의 크기가 작고 에러 확률이 낮은 작업에 효율적이다
    - **네트워크 지연이 예상되는 환경**
        - 사용자의 네트워크 상태가 불안정하더라도 화면이 먼저 바뀌어 있으면 유저는 작업이 이미 끝난 줄 알고 다음 행동으로 넘어갈 수 있어 흐름이 끊기지 않는다
    </aside>
    
    > **낙관적 업데이트(OptimisticUpdate)를 피해야 하는 상황 언제일까요? 🍠**
    > 
    
    <aside>
    📌
    
    실패했을 때의 리스크가 크거나, 서버의 검증이 반드시 필요한 상황에서는 사용하면 안 된다
    
    - **결제 및 송금 등 금전적인 거래**
        - "돈이 보내졌습니다"라고 화면을 먼저 띄웠는데 잔액 부족으로 서버에서 실패한다면 유저에게 엄청난 혼란과 불신을 준다. 반드시 서버 응답을 확인해야 한다
    - **중복 체크가 중요한 '회원가입'이나 '아이디 생성'**
        - 이미 사용 중인 아이디인데 "사용 가능한 아이디입니다"라고 화면을 먼저 보여주면 안된다.
    - **서버 응답 데이터가 내 예상과 크게 다를 수 있는 경우**
        - 내가 보낸 데이터가 서버에서 복잡한 가공 과정을 거쳐 완전히 다른 형태로 저장된다면 낙관적으로 업데이트한 화면과 실제 저장된 데이터 사이의 괴리가 생겨 화면이 변하는 현상이 생긴다
    - **실패 확률이 높은 작업**
        - 업로드하려는 파일이 너무 크거나 서버 점검 중일 가능성이 높은 상황 등 실패할 가능성이 농후한 작업에서는 화면을 미리 바꾸는 것이 오히려 나중에 **롤백(Rollback)** 처리를 유발하여 사용자 친화적이지 못하다.
    </aside>
    
- **낙관적 업데이트(OptimisticUpdate) 블로그 읽고 개념 정리하기 🍠**
    
    # **낙관적 업데이트(OptimisticUpdate) 블로그 읽고 개념 정리하기 🍠**
    
    ---
    
    [개발자 매튜 | 실제 서비스에서 낙관적 업데이트(Optimistic Update)를 활용하여, 유저의 답답함 줄이기](https://www.yolog.co.kr/post/optimistic-update)
    
    - **낙관적 업데이트(OptimisticUpdate)**를 왜 도입해야 하는지, 이 패턴이 해결하려는 문제를 실제 서비스 맥락에서 설명해보세요.
        
        **❓왜 도입해야하는가?**
        
        1️⃣ **빠른 사용자 경험 제공** : 데이터가 서버에 전송되고 처리되기를 기다리지 않고 UI를 즉시 업데이트하여 더 빠른 응답을 제공한다.
        
        2️⃣ **자연스러운 상호작용** : 사용자는 변경 사항이 즉시 반영된다고 느낀다.
        
        3️⃣ **복잡한 상태 관리 간소화** : 상태가 즉시 반영되므로 비동기 작업 동안의 중간 상태를 관리하는 부담이 줄어든다. 
        
        ---
        
        **❓ 실제 서비스 맥락에서 설명하면?**
        
        🔷 **네트워크 지연으로 인한 인터랙션의 단절**
        
        서비스는 사용자가 버튼을 누르면 서버 응답이 올 때까지 화면에 아무런 변화가 없거나 로딩 스피너를 보여준다. 이를 해결하기 위해 서버 응답을 기다리지 않고 즉시 UI를 변경하여 네트워크 상태와 관계없이 사용자의 행동에 앱이 즉각적으로 반응하도록 만든다. 
        
        🔷 **로딩 스피너가 주는 피로감**
        
        모든 동작마다 로딩 바를 보게 되면 사용자는 서비스를 사용하기 무겁고 번거로운 것으로 인식이 된다. 따라서 로딩 상태를 보여주는 단계를 생략하고 바로 결과 화면을 노출함으로써 실제 데이터 처리 속도는 동일하더라도 체감 속도를 상승 시킨다
        
    - TanStack Query 기반 구현 흐름을 `onMutate → (mutate) → onError → onSettled` 순서로 기술해주세요.
        
        1️⃣ **`onMutate` ( 요청 직전 : 화면 먼저 바꾼다)**
        
        - `mutate` 함수가 호출되는 즉시 실행되는 지점이다
        - **수행 작업** :
            - 현재 화면의 데이터를 다시 불러오지 않도록 진행 중인 `refetch`를 취소한다
            - `getQueryData`로 기존 데이터를 백업해둔다. (추후 에러 발생 시 복구하기 위해)
            - `setQueryData`를 사용하여 서버 응답 없이도 화면의 데이터를 보낼 데이터로 업데이트 한다.
            - 백업된 이전 데이터를 반환(`return`)하여 다음 단계인 `onError`에서 사용할 수 있게 전달한다.
        
        **2️⃣ `(mutate)` (서버 통신 중)**
        
        - 실제 서버 API와 통신을 수행한다.
        - **수행 작업** : 클라이언트 화면은 onMutate 덕분에 변경된 상태이고 서버는 백그라운드에서 데이터를 처리한다.
        
        **3️⃣ `onError` (에러 발생시 롤백 처리)**
        
        - 서버 요청이 실패했을 때 실행된다
        - **수행 작업** : `onMutate`에서 반환했던 백업 데이터를 사용하여 `setQueryData`로 화면을 수정 전의 상태로 되돌린다. →  **RollBack**
        
        **4️⃣ onSettled (작업이 모두 완료된 후 최종 동기화)**
        
        - 성공과 실패 여부와 상관없이 요청이 완전히 끝났을 때 마지막으로 실행된다.
        - 수행 작업 : `invalidateQueries`를 호출하여 해당 데이터를 무효화하고 서버에서 최신 데이터를 다시 받아온다. 바뀐 화면이 실제 서버와 일치하는지 최종적으로 확인하는 역할을 한다.
        
    - ToDo “생성” 및 “좋아요 토글”에 **낙관적 업데이트(OptimisticUpdate)**를 적용했을 때의 **실패/충돌 롤백 전략**을 설계해주세요.
        
        **1️⃣ ToDo 생성**
        
        - **문제점** : Todo를 생성할 때 서버가 부여하는 고유 id를 클라이언트는 모르므로 임시 Id를 사용하여 목록에 즉시 추가하지만, 서버 응답 결과에 따라 임시 id를 실제 id로 교체하거나 에러 발생시 해당 항목만 제거해야 하는 관리가 필요하다
        - **롤백 전략**
            
            ```tsx
            useMutation({
              mutationFn: (newTodo) => createTodo(newTodo),
            
              onMutate: async (newTodo) => {
                // 1. 해당 쿼리 키의 refetch를 취소하여 데이터 꼬임 방지
                await queryClient.cancelQueries({ queryKey: ['todos'] });
            
                // 2. 이전 상태 스냅샷 저장 (롤백용)
                const previousTodos = queryClient.getQueryData(['todos']);
            
                // 3. 임시 ID를 사용하여 UI에 즉시 반영
                queryClient.setQueryData(['todos'], (old) => [
                  ...old,
                  { ...newTodo, id: `temp-${Date.now()}`, isDone: false },
                ]);
            
                return { previousTodos };
              },
            
              onError: (err, newTodo, context) => {
                // 4. 에러 발생 시: 백업했던 데이터로 롤백
                queryClient.setQueryData(['todos'], context?.previousTodos);
                toast.error('ToDo 저장에 실패하여 이전 목록으로 복구합니다.');
              },
            
              onSettled: () => {
                // 5. 성공/실패 여부와 관계없이 서버와 최종 동기화 (임시 ID -> 실제 ID 교체)
                queryClient.invalidateQueries({ queryKey: ['todos'] });
              },
            });
            ```
            
        - **핵심 구현**
            - **데이터 백업** : `onMutate`에서 `getQueryData`로 현재 캐시 상태를 스냅샷으로 저장
            - **실패 시 복구** : `onError`에서 저장해둔 `context.previousTodos`를 사용하여 UI 원상복구
            - **ID 정합성** : `onSettled`에서 `invalidateQueries`를 실행해 서버의 실제 ID로 갱신
        
        ---
        
        **2️⃣ 좋아요 토글**
        
        - **문제점** : 좋아요는 짧은 시간에 연속적인 클릭이 발생할 수 있다. 따라서 여러개의 요청이 서버로 가고 응답 순서가 뒤섞이는 레이스 컨디션( Race Condition)이 발생하여 최종 UI 상태가 실제 서버 데이터와 달리질 위험이 있다.
        - **롤백 전략**
            
            ```tsx
            useMutation({
              mutationFn: toggleLike,
            
              onMutate: async ({ postId }) => {
                await queryClient.cancelQueries({ queryKey: ['post', postId] });
            
                const previousPost = queryClient.getQueryData(['post', postId]);
            
                // UI 선반영: 좋아요 상태와 카운트를 즉시 계산하여 적용
                queryClient.setQueryData(['post', postId], (old) => ({
                  ...old,
                  isLiked: !old.isLiked,
                  likeCount: old.isLiked ? old.likeCount - 1 : old.likeCount + 1,
                }));
            
                return { previousPost };
              },
            
              onError: (err, { postId }, context) => {
                // 실패 시: 반전되었던 상태를 다시 백업본으로 롤백
                queryClient.setQueryData(['post', postId], context?.previousPost);
                toast.error('좋아요 처리에 실패했습니다.');
              },
            
              onSettled: (data, error, { postId }) => {
                // 최종 동기화: 서버의 정확한 likeCount 값으로 화면 갱신
                queryClient.invalidateQueries({ queryKey: ['post', postId] });
              },
            });
            ```
            
        - **핵심 전략**
            - **연속 클릭 방어** : 낙관적 업데이트의 성능을 극대화하면서 서버 부하를 줄이기 위해, 실제 mutate 호출부에 Debounce를 적용하여 마지막 클릭 이후 일정 시간이 지났을 때만 요청을 보낸다
            - **즉각적 피드백** : `onMutate`를 통해 사용자의 클릭 즉시 하트 색상과 카운트 변경한다.
            - **충돌 방지** : `cancelQueries`를 통해 이전의 진행 중인 요청을 취소하고 새로운 상태 유지한다
            - **데이터 정밀도** : `onSettled`로 서버의 실제 카운트 값을 가져와 낙관적 계산 오차 보정한다

    ---
    ## 실제 서비스 분석
